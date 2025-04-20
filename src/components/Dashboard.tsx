import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Token } from '../types';
import { styles } from '../styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmailIcon from '@mui/icons-material/Email';

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
            console.error('Error retrieving previous prompts:', error);
        }
    }

    async function sendPdf(publicId: string) {
        try {
            const result = await fetch(
                `https://denys7906.pythonanywhere.com/api/prompts/export/${publicId}/pdf/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/pdf',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const blob = await result.blob();
            const pdfURL = URL.createObjectURL(blob);
            window.open(pdfURL); // Opens in a new tab
        } catch (error) {
            console.error('Error creating pdf:', error);
        }
    }

    async function sendEmail(publicId: string) {
        try {
            const result = await fetch(
                `https://denys7906.pythonanywhere.com/api/prompts/export/${publicId}/email/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        email: 'mark.obrien78@btinternet.com',
                    }),
                }
            );

            const data = await result.json();

            console.log(data.msg);
        } catch (error) {
            console.error('Error creating pdf:', error);
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
                alignItems: 'space-between',
            }}
        >
            {previousPrompts ? (
                previousPrompts.map((prompt) => {
                    return (
                        <>
                            <Button
                                onClick={() => sendPdf(prompt.public_id)}
                                sx={{
                                    padding: '0',
                                    color: styles.colors.fontPrimary,
                                    cursor: 'pointer',
                                    minWidth: '25px',
                                }}
                                aria-label={`Create pdf for prompt id ${prompt.id}`}
                            >
                                <PictureAsPdfIcon role="none" />
                            </Button>
                            <Button
                                onClick={() => sendEmail(prompt.public_id)}
                                sx={{
                                    padding: '0',
                                    color: styles.colors.fontPrimary,
                                    cursor: 'pointer',
                                    minWidth: '25px',
                                }}
                                aria-label={`Send email for prompt id ${prompt.id}`}
                            >
                                <EmailIcon role="none" />
                            </Button>
                            <Box
                                component="section"
                                sx={{
                                    ...styles.container,
                                    ...styles.promptContainer,
                                    textAlign: 'left',
                                    padding: 1,
                                    margin: 1,
                                }}
                                aria-label="Text area for displaying the 5 prompts combined"
                                tabIndex={0}
                            >
                                <Typography>{prompt.prompt_text}</Typography>
                            </Box>
                            <Box
                                component="section"
                                sx={{
                                    ...styles.container,
                                    p: 2,
                                    textAlign: 'left',
                                    padding: 1,
                                    margin: 1,
                                }}
                                aria-label="Text area for displaying the result from the Gemini API"
                                tabIndex={0}
                            >
                                <Typography>
                                    {prompt.prompt_response}
                                </Typography>
                            </Box>
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
