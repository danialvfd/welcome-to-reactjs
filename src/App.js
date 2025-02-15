import React, { useEffect, useReducer, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StateContext, initialState, reducer } from './pages/StateContext';
import { UserProvider, UserContext } from './components/UserContext';
import Layout from './layout/BaseLayout';
import Class from './pages/Class';
import Functional from './pages/Functional';
import UserInfo from './pages/UserInfo';
import TestApi from './pages/testApi';
import TestAjax from './pages/testAjax';
import Profile from './components/Profile';
import UseRef from './pages/TestUseref';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import UseCallback from './pages/useCallback';
import CustomHook from './pages/testCustomHook';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <UserProvider>
                <MainContent />
            </UserProvider>
        </StateContext.Provider>
    );
};

const MainContent = () => {
    const { user, setUser } = useContext(UserContext);
    const [userData, setUserData] = useState();
    const [showUserInfo, setShowUserInfo] = useState(false); 

    useEffect(() => {
        setUser({ name: 'ali' });
    }, [setUser]);

    const handleClick = () => {
        setUser({ name: 'mohammad' });
        setUserData({ name: 'kazemi', family: 'ali', age: 30 });
        setShowUserInfo(true);
    };

    return (
        <Router>
            <Layout>
                <div>
                    <button onClick={handleClick}>دریافت اطلاعات</button>
                    <div>
                        <h3>UserName: {user.name}</h3>
                    </div>
                    {showUserInfo && <UserInfo name={user.name} family={userData.family} age={userData.age} />}
                    <Profile />
                </div>
                <Routes>
                    <Route path="/page1" element={<Functional />} />
                    <Route path="/page2" element={<Class />} />
                    <Route path="/page3" element={<TestApi />} />
                    <Route path="/page4" element={<TestAjax />} />
                    <Route path="/pageA" element={<PageA />} />
                    <Route path="/pageB" element={<PageB />} />
                    <Route path="/pageC" element={<PageC />} />
                    <Route path="/page5" element={<UseRef />} />
                    <Route path="/page6" element={<UseCallback />} />
                    <Route path="/page7" element={<CustomHook />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
