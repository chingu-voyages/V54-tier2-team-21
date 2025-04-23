import { Container, Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import { styles } from '../styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmailIcon from '@mui/icons-material/Email';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import React from 'react';
import { DashBoardComponentProps } from '../types';

const Dashboard = ({
    token,
    previousPrompts,
    handlePreviousPrompts,
}: DashBoardComponentProps) => {
    const [error, setError] = useState('');

    async function getPreviousPrompts() {
        try {
            const result = await fetch(
                'https://denys7906.pythonanywhere.com/api/prompts/me/',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token.token}`,
                    },
                }
            );

            if (result.status === 429) {
                throw new Error('The api has been run too many times');
            }

            const data = await result.json();

            // if (data.code === 'token_not_valid') {
            //     const refreshResult = await fetch(
            //         'https://denys7906.pythonanywhere.com/api/users/token/refresh/',
            //         {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify({ refresh_token: refreshToken }),
            //         }
            //     );
            // }

            handlePreviousPrompts(data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Something went wrong calling the api');
            }
        }
    }
    console.log(previousPrompts);
    async function sendPdf(publicId: string) {
        try {
            const result = await fetch(
                `https://denys7906.pythonanywhere.com/api/prompts/export/${publicId}/pdf/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/pdf',
                        Authorization: `Bearer ${token.token}`,
                    },
                }
            );

            const blob = await result.blob();
            const pdfURL = URL.createObjectURL(blob);
            window.open(pdfURL); // Opens in a new tab
        } catch (error) {
            if (error instanceof Error) {
                setError(`Error creating pdf: ${error.message}`);
            } else {
                setError('Something went wrong calling the api');
            }
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
                        Authorization: `Bearer ${token.token}`,
                    },
                    body: JSON.stringify({
                        email: 'mark.obrien78@btinternet.com',
                    }),
                }
            );

            const data = await result.json();

            console.log(data.msg);
        } catch (error) {
            if (error instanceof Error) {
                setError(`Error sending email: ${error.message}`);
            } else {
                setError('Something went wrong calling the api');
            }
        }
    }

    useEffect(() => {
        getPreviousPrompts();
    }, []);

    if (error || !previousPrompts) {
        return (
            <Container
                sx={{
                    minHeight: '400px',
                    padding: 1,
                }}
            >
                <Typography>{error}</Typography>
            </Container>
        );
    }

    return (
        <Container
            sx={{
                minHeight: '400px',
                padding: 1,
            }}
        >
            {previousPrompts.length > 0 ? (
                previousPrompts.map((prompt, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Grid
                                size={12}
                                key={prompt.id}
                                sx={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    border: '1px solid #3A3737',
                                    padding: 1,
                                    marginBottom: 2,
                                    color: styles.colors.fontSecondary,
                                }}
                            >
                                <Box
                                    sx={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize:
                                                styles.typography
                                                    .fontSizeNormal,
                                        }}
                                    >
                                        {prompt.prompt_text}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {new Date(
                                            prompt.created_at
                                        ).toLocaleString()}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Button
                                        onClick={() =>
                                            sendPdf(prompt.public_id)
                                        }
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
                                        onClick={() =>
                                            sendEmail(prompt.public_id)
                                        }
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
                                    <Link
                                        component={RouterLink}
                                        to={`/prompt/${prompt.id}`}
                                        key={prompt.id}
                                        sx={{
                                            padding: '0',
                                            color: styles.colors.fontPrimary,
                                            cursor: 'pointer',
                                            minWidth: '25px',
                                        }}
                                    >
                                        <PageviewIcon role="none" />
                                    </Link>
                                </Box>
                            </Grid>
                        </React.Fragment>
                    );
                })
            ) : (
                <Typography variant="h4">
                    You are now in the dashboard
                </Typography>
            )}
        </Container>
    );
};

export default Dashboard;
