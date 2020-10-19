import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Routes, Route } from 'react-router-dom';
import Tut1 from './tutorials/Tut1';
import Tut2 from './tutorials/Tut2';
import OverlayScrollbars from 'overlayscrollbars';


export default class Tutorials extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        await(10);
        var osInstance = OverlayScrollbars(document.body);
        osInstance.scroll({ top : 0 });
    }

    render() {
        return (
            <div style={{padding: '15px'}}>
                <Container style={{ maxWidth: '1400px', padding: '0' }}>
                    <Row>
                        <Col md="auto" className="pr-0 position-fixed" style={colNavStyle}>
                            <div className="d-flex flex-column" style={{marginTop: '140px'}}>
                                <h5 className="text-dark ml-0 pl-0">Tutorials</h5>
                            
                                <NavLink style={colNavItemStyle} end={true} to="/tutorials" activeStyle={activeStyle} className="text-dark text-decoration-none" >
                                    Getting Started
                                </NavLink>
                            
                                <NavLink style={colNavItemStyle} to="/tutorials/tut2" activeStyle={activeStyle} className="text-dark text-decoration-none" >
                                    Tut2
                                </NavLink>
                            </div>                     
                        </Col>
                        <Col md="auto" className="pr-0 position-fixed" style={{marginTop: '61px',width: '200px',borderRight: 'solid 1px lightgrey',height: '100%',zIndex: '-10'}}></Col>
                        <Col style={{marginLeft: '240px', marginTop: '200px'}}>               
                            <Routes>
                                <Route path="/" element={<Tut1 />}/>
                                <Route path="/tut2" element={<Tut2 />}/>
                            </Routes>                                    
                        </Col>
                    </Row>  
                </Container>
            </div>    
        )
    }
}

const colNavStyle = {   
    marginTop: '61px',
    width: '200px',
    height: '80vh',
}

const colNavItemStyle = {
    width: '100%',
    height: '30px',
    padding: '5px',
    zIndex: '10',
}

const activeStyle = {
    background: 'lightgrey',
    paddingBottom: '5px',
    borderWidth: '0 5px 0px 0',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to bottom, rgba(67,169,170,1), rgba(105,67,170,1)) 1' 
}