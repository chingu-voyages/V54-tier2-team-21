import '../src/App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Prompt from './components/Prompt';
import Footer from './components/Footer';
import { Inputs } from './types';
import Result from './components/Result';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Container from '@mui/material/Container';
import { formatPrompt } from './utils/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import showdown from 'showdown';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';

function App() {
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const theme = createTheme({
        typography: {
            fontFamily: `"Poppins", sans-serif`,
        },
    });

    function onFormSubmit(formData: Inputs) {
        const prompt = Object.values(formData)
            .map((textAreaInput) => formatPrompt(textAreaInput))
            .join(' ');
        setPrompt(prompt);
    }

    async function onPromptSubmit(prompt: string) {
        setLoading(true);
        setResult('');
        try {
            const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.0-flash',
            });

            const result = await model.generateContent(prompt);

            const converter = new showdown.Converter();

            const data = converter.makeHtml(result.response.text());

            setResult(data);
        } catch (error) {
            console.error('Error with Gemini API:', error);
            setResult(
                '⚠️ Oops! 5STAR AI is temporarily unavailable. Please try again later.'
            );
        }
        setLoading(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                sx={{
                    '@media (min-width: 0px)': {
                        maxWidth: 'sm',
                    },
                }}
            >
                <Header />
                <Hero />
                <HowToUse />
                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Form onFormSubmit={onFormSubmit} />
                    <Prompt prompt={prompt} onPromptSubmit={onPromptSubmit} />
                    <Result result={result} loading={loading} />
                </Container>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
