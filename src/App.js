import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClassComponent from './components/Class';
import FunctionalComponent from './components/Functional';
import UserInfo from './components/UserInfo';

const App = () => {
    const [userData, setUserData] = useState(null);

    const handleClick = () => {
        const data = {
            name: 'Ali',
            family: 'Mohammadi',
            age: 25,
        };
        setUserData(data); // ارسال داده‌ها به state
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
                    </ul>
                </nav>
                <div>
                    <button onClick={handleClick}>ارسال اطلاعات</button>
                    {userData && <UserInfo {...userData} />}
                </div>

                <Routes>
                    <Route path="/page1" element={<FunctionalComponent />} />
                    <Route path="/page2" element={<ClassComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
