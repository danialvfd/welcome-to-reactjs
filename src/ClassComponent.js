import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('ClassComponent: Constructor called');
    }

    componentDidMount() {
        console.log('ClassComponent: Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ClassComponent: Component did update');
    }

    componentWillUnmount() {
        console.log('ClassComponent: Component will unmount');
    }

    render() {
        console.log('ClassComponent: Render method called');
        return (
            <div>
                <h1>Class Component</h1>
            </div>
        );
    }
}

export default ClassComponent;
