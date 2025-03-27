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

function App() {
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');

    function onFormSubmit(formData: Inputs) {
        const prompt = Object.values(formData)
            .map((textAreaInput) => formatPrompt(textAreaInput))
            .join(' ');
        setPrompt(prompt);
    }

    async function onPromptSubmit(prompt: string) {
        try {
            const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.0-flash',
            });

            const result = await model.generateContent(prompt);
            setResult(result.response.text());
        } catch (error) {
            console.error('Error with Gemini API:', error);
            setResult(
                '⚠️ Oops! 5STAR AI is temporarily unavailable. Please try again later.'
            );
        }
    }

    return (
        <>
            <Container
                sx={{
                    '@media (min-width: 0px)': {
                        maxWidth: '550px',
                    },
                }}
            >
                <Header />
                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Form onFormSubmit={onFormSubmit} />
                    <Prompt prompt={prompt} onPromptSubmit={onPromptSubmit} />
                    <Result result={result} />
                </Container>
                <Footer />
            </Container>
        </>
    );
}

export default App;
