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
                ...styles.flexColumn,
                justifyContent: 'space-between',
                ...styles.container,
                ...styles.promptContainer,
                textAlign: 'left',
            }}
            aria-label="Text area for displaying the 5 prompts combined"
            tabIndex={0}
        >
            {prompt ? (
                <Typography
                    sx={{
                        m: 2,
                        color: styles.colors.fontPrimary,
                        lineHeight: 1.7,
                    }}
                >
                    {prompt}
                </Typography>
            ) : (
                <Box
                    component="div"
                    sx={{
                        ...styles.flexColumn,
                        alignItems: 'center',
                        marginTop: '1.5em',
                    }}
                >
                    <Box
                        component="img"
                        src="/star-logo.png"
                        alt="Dark 5 pointed star with white circular background"
                        sx={{
                            width: '63px',
                            height: '63px',
                        }}
                    />
                    <Typography
                        sx={{ m: 2, color: styles.colors.fontSecondary }}
                    >
                        This is where the Prompt Magic Happens
                    </Typography>
                </Box>
            )}

            <Button
                variant="contained"
                type="submit"
                sx={{ ...styles.primaryButton }}
                onClick={() => onPromptSubmit(prompt)}
            >
                Submit
            </Button>
        </Box>
    );
};

export default Prompt;
