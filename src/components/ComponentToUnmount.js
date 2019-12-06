import React, { Component } from 'react';

class ComponentToUnmount extends Component {
    state = {
        windowWidth: 0
    }

    render() {
        return (
            <div>
                <p>Component to desmount</p>
            </div>
        );
    }
}

export default ComponentToUnmount;