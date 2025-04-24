import { Box, Typography } from '@mui/material';

const instructions = [
    {
        title: '1. Enter your ideas with 5 prompts',
        info: 'Hover over the "?" icons for tips on providing the best information.',
    },
    {
        title: '2. Click Generate to preview your full prompt',
        info: 'Review the generated prompt and make any final edits before submitting.',
    },
    {
        title: '3. Submit and get your response',
        info: 'Sit back as Google Gemini generates a precise and customised response tailored to your input!',
    },
];

const HowToUse = () => {
    return (
        <Box component="section">
            <Typography
                variant="h2"
                sx={{
                    marginBottom: '3rem',
                    fontSize: '2rem',
                    fontWeight: 700,
                }}
            >
                HOW TO USE <br /> 5TAR AI
            </Typography>

            <Box
                component="section"
                sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    gap: '40px',
                    margin: 'auto',
                }}
            >
                {instructions.map((instruction, index) => (
                    <Box
                        component="section"
                        key={index}
                        sx={{
                            backgroundColor: '#37394a',
                            padding: '20px',
                            textAlign: 'center',
                            borderRadius: '5px',
                            color: '#8a8a93',
                            border: '1px solid #636577',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#fff',
                                marginBottom: '20px',
                                fontSize: '1.2rem',
                            }}
                        >
                            {instruction.title}
                        </Typography>
                        <Typography>{instruction.info}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HowToUse;
