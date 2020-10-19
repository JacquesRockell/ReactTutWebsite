import React from 'react';
import OverlayScrollbars from 'overlayscrollbars';

export default class PageNotFound extends React.Component {
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
            <div>
                <h1 style={{ margin: '8rem', marginBottom: '60vh'}}>404 not found</h1>
            </div>
        )
    }
}
