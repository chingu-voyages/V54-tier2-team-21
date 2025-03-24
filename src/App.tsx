import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Prompt from './components/Prompt';
import Footer from './components/Footer';
import { Inputs } from './types';
import Result from './components/Result';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Container from '@mui/material/Container';

function App() {
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');

    function onFormSubmit(formData: Inputs) {
        const prompt = Object.values(formData).join('. ');
        setPrompt(prompt);
    }

    async function onPromptSubmit(prompt: string) {
        const genAI = new GoogleGenerativeAI('ADD YOUR KEY HERE');
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const result = await model.generateContent(prompt);
        setResult(result.response.text());
    }

    return (
        <>
            <Header />
            <Container className="prompt-container">
                <Form onFormSubmit={onFormSubmit} />
                <Prompt prompt={prompt} onPromptSubmit={onPromptSubmit} />
                <Result result={result} />
            </Container>
            <Footer />
        </>
    );
}

export default App;
