import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Class from './pages/Class';
import Functional from './pages/Functional';
import UserInfo from './pages/UserInfo';
import TestApi from './pages/testApi';

const App = () => {
    const [userData, setUserData] = useState(null);

    const handleClick = () => {
        const data = {
            name: 'Ali',
            family: 'Mohammadi',
            age: 25,
        };
        setUserData(data);
    };

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
                        <li>
                            <Link to="/page3">page 3 (TestApi)</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button onClick={handleClick}>ارسال اطلاعات</button>
                    {userData && <UserInfo {...userData} />}
                </div>

                <Routes>
                    <Route path="/page1" element={<Functional />} />
                    <Route path="/page2" element={<Class />} />
                    <Route path="/page3" element={<TestApi />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
