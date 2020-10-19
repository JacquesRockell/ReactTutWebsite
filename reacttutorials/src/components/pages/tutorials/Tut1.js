import React from 'react';
import OverlayScrollbars from 'overlayscrollbars';
import Card from 'react-bootstrap/Card';

export default class Tut1 extends React.Component {
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
            <div style={{minHeight: '100vh'}}>
                <h1>Getting Started</h1>
                <p className="mt-5 TutText">
                    The quickest way to get started with react is to use "Create React App", it will set up a react project for you all you need to do is open an empty project in VSCode (or your prefered code editor) and run the following command:  
                </p>
                <Card>
                    <Card.Header>
                        npx create-react-app
                    </Card.Header>
                </Card>
                <pre>
                    
                </pre>
            </div>
        )
    }
}

