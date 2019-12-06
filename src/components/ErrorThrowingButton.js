import React, { Component } from 'react';

class ErrorThrowingButton extends Component {
    state = { throwError: false }

    render() {
        if(this.state.throwError){
            throw new Error('I throw an error from the button')
        }
        return (
            <div>
                <button onClick={() => this.setState({ throwError: true })}>
                    Throw error!!!
                </button>
            </div>
        );
    }
}

export default ErrorThrowingButton;