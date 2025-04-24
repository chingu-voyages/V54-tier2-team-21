import { Container, Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import { styles } from '../styles';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
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
    const [emailSent, setEmailSent] = useState(false);

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
                }
            );

            if (result.status === 200) {
                setEmailSent(true);
                setTimeout(() => setEmailSent(false), 2000);
            }
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
                minHeight: '600px',
                padding: 1,
            }}
        >
            <Box
                sx={{
                    border: '1px solid #595959',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    mb: 4,
                    pb: 2,
                    overflow: 'clip',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#292C42',
                        textAlign: 'left',
                        p: 1,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.85rem',
                            fontWeight: 300,
                        }}
                    >
                        Welcome to your{' '}
                        <Box component="span" sx={{ fontWeight: 700 }}>
                            5TAR.ai
                        </Box>{' '}
                        history
                    </Typography>
                </Box>
                <Box
                    component="img"
                    src="/ultraviolet-star.png"
                    alt="Ultraviolet star"
                    sx={{
                        width: 100,
                        height: 100,
                        margin: '1em auto',
                    }}
                />
                <Box>
                    <Typography
                        sx={{
                            fontSize: '0.85rem',
                            fontWeight: 300,
                        }}
                    >
                        Download your 5-star prompt & result
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.85rem',
                            fontWeight: 300,
                        }}
                    >
                        as a PDF or send it by e-mail
                    </Typography>
                </Box>
            </Box>
            {previousPrompts.length > 0 ? (
                previousPrompts.map((prompt, index) => {
                    return (
                        <React.Fragment key={index}>
                            {emailSent && (
                                <Typography
                                    sx={{
                                        fontSize:
                                            styles.typography.fontSizeNormal,
                                        m: 1,
                                        color: '#FD99FF',
                                    }}
                                >
                                    The email has been successfully sent
                                </Typography>
                            )}
                            <Grid
                                size={12}
                                key={prompt.id}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    borderBottom: '1px solid #3A3737',
                                    padding: '1em 1.25em',
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
                                    <Link
                                        component={RouterLink}
                                        to={`/prompt/${prompt.id}`}
                                        key={prompt.id}
                                        sx={{
                                            padding: '0',
                                            color: styles.colors.fontPrimary,
                                            fontSize:
                                                styles.typography
                                                    .fontSizeNormal,
                                            textDecoration: 'none',
                                            '&:hover, &:focus': {
                                                fontWeight: 'bold',
                                            },
                                        }}
                                        aria-label={`Click to view prompt id ${prompt.id}`}
                                    >
                                        {prompt.prompt_text}
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
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
                                    <Box sx={{ display: 'flex', gap: 3 }}>
                                        <Button
                                            onClick={() =>
                                                sendEmail(prompt.public_id)
                                            }
                                            sx={{
                                                padding: '0',
                                                color: styles.colors
                                                    .fontPrimary,
                                                cursor: 'pointer',
                                                minWidth: '25px',
                                            }}
                                            aria-label={`Send email for prompt id ${prompt.id}`}
                                        >
                                            <EmailIcon role="none" />
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                sendPdf(prompt.public_id)
                                            }
                                            sx={{
                                                padding: '0',
                                                color: styles.colors
                                                    .fontPrimary,
                                                cursor: 'pointer',
                                                minWidth: '25px',
                                            }}
                                            aria-label={`Create pdf for prompt id ${prompt.id}`}
                                        >
                                            <DownloadIcon role="none" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </React.Fragment>
                    );
                })
            ) : (
                <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                    No saved prompts yet
                </Typography>
            )}
        </Container>
    );
};

export default Dashboard;
