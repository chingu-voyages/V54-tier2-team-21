import '../App.css';
import Form from './Form';
import Prompt from './Prompt';
import Result from './Result';
import Container from '@mui/material/Container';
import Hero from './Hero';
import HowToUse from './HowToUse';
import showdown from 'showdown';
import { useState, useRef } from 'react';
import { Inputs, Token } from '../types';
import { formatPrompt } from '../utils/utils';

function Home({ token }: Token) {
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [isPromptSubmitted, setIsPromptSubmitted] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    function onFormSubmit(formData: Inputs) {
        setIsPromptSubmitted(false);
        const prompt = Object.values(formData)
            .map((textAreaInput) => formatPrompt(textAreaInput))
            .join(' ');
        setPrompt(prompt);
    }

    async function onPromptSubmit(prompt: string) {
        setLoading(true);
        setResult('');
        setIsPromptSubmitted(true);
        try {
            const result = await fetch(
                'https://denys7906.pythonanywhere.com/api/send_prompt/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(token && { Authorization: `Bearer ${token}` }),
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
    return (
        <>
            <Hero onFocusInput={handleFocus} />
            <HowToUse />
            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Form onFormSubmit={onFormSubmit} ref={inputRef} />
                <Prompt
                    prompt={prompt}
                    onPromptSubmit={onPromptSubmit}
                    isPromptSubmitted={isPromptSubmitted}
                />
                <Result result={result} loading={loading} />
            </Container>
        </>
    );
}

export default Home;
