import React, { useState, useEffect } from 'react';

const FunctionalComponent = ({ name }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('FunctionalComponent: Component did mount');

        return () => {
            console.log('FunctionalComponent: Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('FunctionalComponent: Component did update');
    });

    const handleClick = () => {
        setCount(count + 1);
    };

    console.log('FunctionalComponent: Render method called');

    return (
        <div>
            <h1>Functional Component</h1>
            <p>Welcome, {name}</p>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default FunctionalComponent;
