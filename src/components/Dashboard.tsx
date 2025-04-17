import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Token } from '../types';

const Dashboard = ({ token }: Token) => {
    const [previousPrompts, setPreviousPrompts] = useState([{}]);

    async function getPreviousPrompts() {
        try {
            const result = await fetch(
                'https://denys7906.pythonanywhere.com/api/prompts/me/',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await result.json();

            setPreviousPrompts(data);
        } catch (error) {
            console.error('Error with Gemini API:', error);
        }
    }

    useEffect(() => {
        getPreviousPrompts();
    }, []);

    return (
        <Box
            sx={{
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {previousPrompts ? (
                previousPrompts.map((prompt) => {
                    return (
                        <>
                            <Typography>{prompt.prompt_text}</Typography>
                            <Typography>{prompt.prompt_response}</Typography>
                        </>
                    );
                })
            ) : (
                <Typography variant="h4">
                    You are now in the dashboard
                </Typography>
            )}
        </Box>
    );
};

export default Dashboard;
