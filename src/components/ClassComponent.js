import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
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

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log('ClassComponent: Render method called');
        return (
            <div>
                <h1>Class Component</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default ClassComponent;
