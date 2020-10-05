import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import HeroImg from './HeroImg.jpg';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div class="d-flex align-items-center text-white" fluid style={heroStyle}>
            <Container style={{ maxWidth: '1400px', padding: '0' }}>
                <h1 className="font-weight-bold" style={{ fontSize: '80px', marginBottom: '3rem'}}>Learn Reactjs</h1>
                <p style={{maxWidth: '500px', marginBottom: '3rem', fontSize: '18px'}} > Enim mollit adipisicing qui excepteur eiusmod laboris. Tempor commodo occaecat excepteur dolore elit elit dolor fugiat. Sunt voluptate laboris elit magna quis aliqua eu ea irure.</p>
                <Button style={buttonStyle}><Link className="text-white text-decoration-none" to="/tutorials">Learn React</Link></Button>
            </Container>  
        </div>                   
    )
}

const heroStyle = { 
    background: `URL(${HeroImg})`,
    backgroundSize: 'cover',
    height: '800px',
    width: '100%',
    padding: '15px',  
}

const buttonStyle = {
    background: 'linear-gradient(to bottom left, rgba(67,169,170,1), rgba(105,67,170,1))',
    border: 'none',
    padding: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
}