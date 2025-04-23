import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import AuthRequired from './components/AuthRequired';
import Dashboard from './components/Dashboard';
import { clearCookie, getCookie } from './utils/utils';
import { useState, useEffect } from 'react';
import PromptViewer from './components/PromptViewer';
import { PreviousPrompts } from './types';
import Container from '@mui/material/Container';
import ProgressIndicator from './components/ProgressIndicator';
import { styles } from './styles';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [token, setToken] = useState({ token: '', refresh: '' });
    const [previousPrompts, setPreviousPrompts] = useState<PreviousPrompts>();

    // This is if the user refreshes the page
    useEffect(() => {
        getToken();
    }, []);

    function getToken() {
        const cookieToken = getCookie('token');
        const cookieRefreshToken = getCookie('refresh');
        if (cookieToken) {
            setToken({ token: cookieToken, refresh: cookieRefreshToken });
            setIsLoggedIn(true);
        }
        setIsAuthChecked(true);
    }

    function handleLogin() {
        getToken();
    }

    function handleLogout() {
        clearCookie('token');
        clearCookie('refresh');
        setIsLoggedIn(false);
        setToken({ token: '', refresh: '' });
    }

    function handlePreviousPrompts(previousPrompts: PreviousPrompts) {
        setPreviousPrompts(previousPrompts);
    }

    return isAuthChecked ? (
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
                            element={
                                <Dashboard
                                    token={token}
                                    handlePreviousPrompts={
                                        handlePreviousPrompts
                                    }
                                    previousPrompts={previousPrompts}
                                />
                            }
                        ></Route>
                        <Route
                            path="prompt/:id"
                            element={
                                <PromptViewer
                                    previousPrompts={previousPrompts}
                                />
                            }
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    ) : (
        <Container
            sx={{
                display: styles.flexRow,
                justifyContent: 'center',
                marginBottom: '1em',
            }}
        >
            <ProgressIndicator />
        </Container>
    );
}

export default App;
