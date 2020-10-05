import React from 'react';
import HeroSection from './HeroSection';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import downArrow from './downArrow.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <div>
            <HeroSection/>
            <Container className="text-center" style={{maxWidth: '1400px'}}>
                
                <Button style={buttonStyle}>
                    <img
                        src={downArrow}
                        height="50"
                        width="50"
                        alt="Down Arrow"
                    />
                </Button>

                <h1 style={{ marginTop: '200px', marginBottom: '100px' }}>F A Q</h1>

                <Row style={{ marginBottom: '300px' }} className="d-flex justify-content-around">
                    <Col className="text-center m-4">
                        <h2 style={underline}>What Is React</h2>
                        <p>
                            React JS is an open source Javascript library which is used for building user interfaces and their components. React is  mainly maintained by facebook but is also maintained by a community of other companies and individual developers. Finally React JS is used to make many popular websites like Facebook, Instagram, Reddit, Airbnb and Netflix.
                        </p>
                    </Col>
                    <Col className="text-center m-4">
                        <h2 style={underline}>Why React</h2>
                        <p>
                            React JS is very popular at the moment which means it has a large community to help you learn through tutorials or mentoring, React JS is also very scalable, this is due to how modular it is. Which means you can reuse the same modules in different programs. The community has also made components with these modules that you can freely use. React is also very well liked by developers, with some statistics saying that react is loved by 67% of developers.  
                        </p>
                    </Col>
                    <Col className="text-center m-4">
                        <h2 style={underline}>Who Made React</h2>
                        <p>
                            React was originally created by Jordan Walke who is a software engineer at facebook. It was first used for facebook’s news feed in 2011 and eventually became open source in 2013, which meant the public could contribute to maintaining and updating react.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const buttonStyle = {
    marginTop: '100px',
    borderRadius: '50px',
    border: 'none',
    padding: '0',
}

const underline = {
    paddingBottom: '15px',
    borderBottom: '5px solid lightgrey'
}