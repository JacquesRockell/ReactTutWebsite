import React from 'react';
import HeroSection from './HeroSection';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import downArrow from './downArrow.png';

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

                <div style={{ marginBottom: '300px' }} className="d-flex justify-content-around">
                    <div className="text-center m-4">
                        <h2>What Is React</h2>
                        <p>
                            Ad proident eu deserunt ut voluptate quis aliqua in non culpa. Dolor ipsum fugiat cupidatat et ex aliqua amet cupidatat nulla. Dolor aute culpa ipsum dolore cillum aliquip deserunt dolore. Duis non ad reprehenderit nulla. Esse adipisicing Lorem eu aute mollit id sint in. Et esse elit quis dolor ipsum ex magna commodo est cupidatat id proident sunt reprehenderit.
                        </p>
                    </div>
                    <div className="text-center m-4">
                        <h2>Why React</h2>
                        <p>
                            Ad proident eu deserunt ut voluptate quis aliqua in non culpa. Dolor ipsum fugiat cupidatat et ex aliqua amet cupidatat nulla. Dolor aute culpa ipsum dolore cillum aliquip deserunt dolore. Duis non ad reprehenderit nulla. Esse adipisicing Lorem eu aute mollit id sint in. Et esse elit quis dolor ipsum ex magna commodo est cupidatat id proident sunt reprehenderit.
                        </p>
                    </div>
                    <div className="text-center m-4">
                        <h2>Who Made React</h2>
                        <p>
                            Ad proident eu deserunt ut voluptate quis aliqua in non culpa. Dolor ipsum fugiat cupidatat et ex aliqua amet cupidatat nulla. Dolor aute culpa ipsum dolore cillum aliquip deserunt dolore. Duis non ad reprehenderit nulla. Esse adipisicing Lorem eu aute mollit id sint in. Et esse elit quis dolor ipsum ex magna commodo est cupidatat id proident sunt reprehenderit.
                        </p>
                    </div>
                </div>
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