import { Box, Typography, Container } from '@mui/material';
import { styles } from '../styles';
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
                    ...styles.container,
                    ...styles.promptContainer,
                    textAlign: 'left',
                    p: 1,
                }}
                aria-label="Text area for displaying the 5 prompts combined"
                tabIndex={0}
            >
                <Typography>{prompt.prompt_text}</Typography>
            </Box>
            <Typography>Result</Typography>
            <Box
                component="section"
                sx={{
                    ...styles.container,
                    p: 1,
                }}
                aria-label="Text area for displaying the result from the Gemini API"
                tabIndex={0}
            >
                <Typography
                    dangerouslySetInnerHTML={{
                        __html: convertResult(prompt.prompt_response),
                    }}
                    className="result"
                ></Typography>
            </Box>
        </Container>
    );
};

export default PreviousPrompt;
