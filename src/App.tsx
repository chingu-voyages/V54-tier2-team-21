import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import AuthRequired from './components/AuthRequired';
import Dashboard from './components/Dashboard';
import { clearCookie, getCookie } from './utils/utils';
import { useState, useEffect } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');

    // This is if the user refreshes the page
    useEffect(() => {
        getToken();
    }, []);

    function getToken() {
        const cookieToken = getCookie('token');

        if (cookieToken) {
            setToken(cookieToken);

            setIsLoggedIn(true);
        }
    }

    function handleLogin() {
        getToken();
    }

    function handleLogout() {
        clearCookie('token');
        clearCookie('refresh');
        setIsLoggedIn(false);
        setToken('');
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
                            token={token}
                        />
                    }
                >
                    <Route index element={<Home token={token} />} />
                    <Route
                        path="login"
                        element={
                            <Login page="login" handleLogin={handleLogin} />
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <Login page="signup" handleLogin={handleLogin} />
                        }
                    />

                    <Route element={<AuthRequired isLoggedIn={isLoggedIn} />}>
                        <Route
                            path="dashboard"
                            element={<Dashboard token={token} />}
                        ></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
