import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StateContext, initialState, reducer } from './pages/StateContext';
import { UserProvider } from './components/UserContext';
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
  const [userData, setUserData] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    setUserData({
      name: 'Ali',
      family: 'Mohammadi',
      age: 25,
    });
  };

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Layout>
          <div>
            <button onClick={handleClick}>ارسال اطلاعات</button>
            {userData && <UserInfo {...userData} />}
          </div>
          
          <UserProvider>
            <Profile />
          </UserProvider>

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
    </StateContext.Provider>
  );
};

export default App;