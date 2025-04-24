import { Box, Typography, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { PreviousPrompt as Prompt, PreviousPrompts } from '../types';
import { convertResult } from '../utils/utils';

const PreviousPrompt = ({ previousPrompts }: PreviousPrompts) => {
    const { id } = useParams();

    const prompt = previousPrompts.find(
        (prevPrompt: Prompt) => prevPrompt.id === Number(id)
    );

    if (!prompt) {
        return;
    }

    return (
        <Container
            sx={{
                textAlign: 'left',
                mt: 2,
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Typography>Prompt</Typography>
            <Box
                component="section"
                sx={{
                    textAlign: 'left',
                    p: 1,
                    mb: 1,
                    borderBottom: '1px solid #3A3737',
                }}
                aria-label="Text area for displaying the 5 prompts combined"
                tabIndex={0}
            >
                <Typography sx={{ fontWeight: 200 }}>
                    {prompt.prompt_text}
                </Typography>
                <Typography sx={{ fontWeight: 200, mt: 2 }}>
                    {new Date(prompt.created_at).toLocaleString()}
                </Typography>
            </Box>
            <Typography>Result</Typography>
            <Box
                component="section"
                sx={{
                    p: 1,
                    mb: 1,
                    borderBottom: '1px solid #3A3737',
                }}
                aria-label="Text area for displaying the result from the Gemini API"
                tabIndex={0}
            >
                <Typography
                    dangerouslySetInnerHTML={{
                        __html: convertResult(prompt.prompt_response),
                    }}
                    className="result"
                    sx={{ fontWeight: 200 }}
                ></Typography>
            </Box>
        </Container>
    );
};

export default PreviousPrompt;
