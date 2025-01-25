import React, { useEffect } from 'react';

const FunctionalComponent = () => {
    useEffect(() => {
        console.log('FunctionalComponent: Component did mount');

        return () => {
            console.log('FunctionalComponent: Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('FunctionalComponent: Component did update');
    });

    console.log('FunctionalComponent: Render method called');

    return (
        <div>
            <h1>Functional Component</h1>
        </div>
    );
};

export default FunctionalComponent;
