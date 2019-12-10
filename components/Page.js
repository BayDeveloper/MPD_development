import React, { Component } from 'react';
import IndexPage from './Head';
class Page extends Component {
    render() {
        return (
            <div>
                <IndexPage/>
                {this.props.children}
            </div>
        );
    }
}

export default Page;