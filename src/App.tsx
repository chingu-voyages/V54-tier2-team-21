import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import AuthRequired from './components/AuthRequired';
import Dashboard from './components/Dashboard';
import { clearCookie } from './utils/utils';
import { useState, useEffect } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = document.cookie;

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        clearCookie('token');
        clearCookie('refresh');
        setIsLoggedIn(false);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            handleLogout={handleLogout}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                >
                    <Route index element={<Home />} />
                    <Route
                        path="login"
                        element={
                            <Login page="login" handleLogin={handleLogin} />
                        }
                    />
                    <Route path="register" element={<Login page="signup" />} />

                    <Route element={<AuthRequired isLoggedIn={isLoggedIn} />}>
                        <Route path="dashboard" element={<Dashboard />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
