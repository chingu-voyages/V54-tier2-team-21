import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
interface PromptProps {
    prompt: string;
    onPromptSubmit: (prompt: string) => void;
}

const Prompt = ({ prompt, onPromptSubmit }: PromptProps) => {
    return (
        <>
            <Box
                component="section"
                sx={{
                    width: '100%',
                    minHeight: '250px',
                    border: '3px solid transparent',
                    background:
                        'linear-gradient(#313342, #313342) padding-box, linear-gradient(to right, #8A00F9 0%, #FD99FF 100%) border-box',
                    borderRadius: '8px',
                    marginBottom: '4em',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Typography sx={{ m: 2, color: '#FFFFFF' }}>
                    {prompt ? prompt : 'PLEASE ENTER A PROMPT'}
                </Typography>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        m: 4,
                        padding: '0.5em 2em',
                        fontSize: '1rem',
                        fontWeight: 600,
                        background:
                            'linear-gradient(to right, #8A00F9 0%, #FD99FF 100%)',
                        alignSelf: 'center',
                        borderRadius: '15px',
                    }}
                    onClick={() => onPromptSubmit(prompt)}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default Prompt;
