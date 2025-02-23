import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StateContext, initialState, reducer } from './pages/StateContext';
import { UserProvider } from './components/UserContext';
import Layout from './layout/BaseLayout';
import Class from './pages/Class';
import Functional from './pages/Functional';
import TestApi from './pages/TestApi';
import TestAjax from './pages/TestAjax';
import UseRef from './pages/TestUseref';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import UseCallback from './pages/UseCallback';
import CustomHook from './pages/TestCustomHook';
import DongChi from './pages/DongChi';
import UserDetails from './pages/UserDetails'; 
import './assets/myStyles.css';
import TestDragging from './pages/TestDragging';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <UserProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/DongChi" element={<DongChi />} />
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
                            <Route path="/user-details" element={<UserDetails />} />
                            <Route path="/TestDragging" element={<TestDragging />} />
                        </Routes>
                    </Layout>
                </Router>
            </UserProvider>
        </StateContext.Provider>
    );
};

export default App;
