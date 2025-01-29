import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/page1">page 1 (FunctionalBase)</Link>
                        </li>
                        <li>
                            <Link to="/page2">page 2 (ClassBase)</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/page1" element={<FunctionalComponent />} />
                    <Route path="/page2" element={<ClassComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
