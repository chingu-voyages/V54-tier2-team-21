import '../src/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Prompt from './components/Prompt';
import Footer from './components/Footer';
import { Inputs } from './types';
import Result from './components/Result';
import Container from '@mui/material/Container';
import { formatPrompt } from './utils/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import showdown from 'showdown';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';
import Login from './components/Login';
import { LoginForm } from './types';

function App() {
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const theme = createTheme({
        typography: {
            fontFamily: `"Poppins", sans-serif`,
        },
    });
    const [displayLogin, setDisplayLogin] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    function handleDisplayLogin() {
        setDisplayLogin(true);
    }

    function onFormSubmit(formData: Inputs) {
        const prompt = Object.values(formData)
            .map((textAreaInput) => formatPrompt(textAreaInput))
            .join(' ');
        setPrompt(prompt);
    }

    function handleLoginClick(data: LoginForm) {
        setDisplayLogin(false);
        setIsLoggedIn(true);
        document.cookie = 'token=12565235632';
    }

    function handleLogout() {
        document.cookie =
            'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        setIsLoggedIn(false);
    }

    async function onPromptSubmit(prompt: string) {
        setLoading(true);
        setResult('');
        try {
            const result = await fetch(
                'https://v54-tier2-team-21-be.onrender.com/api/send_prompt/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt_text: prompt }),
                }
            );

            const data = await result.json();

            const converter = new showdown.Converter();

            const convertedData = converter.makeHtml(data.api_response_text);

            setResult(convertedData);
        } catch (error) {
            console.error('Error with Gemini API:', error);
            setResult(
                '⚠️ Oops! 5STAR AI is temporarily unavailable. Please try again later.'
            );
        }
        setLoading(false);
    }

    useEffect(() => {
        const token = document.cookie;

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                sx={{
                    '@media (min-width: 0px)': {
                        maxWidth: 'sm',
                    },
                    backgroundImage: 'url("background.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Header
                    handleDisplayLogin={handleDisplayLogin}
                    displayLogin={displayLogin}
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                />
                {displayLogin ? (
                    <Login handleLoginClick={handleLoginClick} />
                ) : (
                    <>
                        <Hero />
                        <HowToUse />
                        <Container
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <Form onFormSubmit={onFormSubmit} />
                            <Prompt
                                prompt={prompt}
                                onPromptSubmit={onPromptSubmit}
                            />
                            <Result result={result} loading={loading} />
                        </Container>
                    </>
                )}
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
