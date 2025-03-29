import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styles } from '../styles';
interface PromptProps {
    prompt: string;
    onPromptSubmit: (prompt: string) => void;
}

const Prompt = ({ prompt, onPromptSubmit }: PromptProps) => {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                minHeight: '250px',
                border: '3px solid transparent',
                background: styles.colors.containerBackgroundWithBorder,
                borderRadius: '8px',
                marginBottom: '4em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {prompt ? (
                <Typography sx={{ m: 2, color: styles.colors.fontPrimary }}>
                    {prompt}
                </Typography>
            ) : (
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '1.5em',
                    }}
                >
                    <Box
                        component="img"
                        src="./src/assets/star-logo.png"
                        alt="Dark 5 pointed star with white circular background"
                        sx={{
                            width: '63px',
                            height: '63px',
                        }}
                    />
                    <Typography
                        sx={{ m: 2, color: styles.colors.fontSecondary }}
                    >
                        PLEASE ENTER A PROMPT
                    </Typography>
                </Box>
            )}

            <Button
                variant="contained"
                type="submit"
                sx={{
                    m: 4,
                    padding: '0.5em 2em',
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: styles.colors.buttonBackground,
                    alignSelf: 'center',
                    borderRadius: '15px',
                }}
                onClick={() => onPromptSubmit(prompt)}
            >
                Submit
            </Button>
        </Box>
    );
};

export default Prompt;
