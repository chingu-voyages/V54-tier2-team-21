import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styles } from '../styles';

const Hero = ({ onFocusInput }: { onFocusInput: () => void }) => {
    return (
        <Box
            component="section"
            sx={{
                marginTop: '1.75em',
                marginBottom: '1.75em',
                padding: '1.75em',
            }}
        >
            <Box
                component="img"
                src="/logo.gif"
                alt="Spinning gif of a purple and torquoise pentagon"
                sx={{
                    height: 200,
                    marginBottom: '1em',
                }}
            />
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 700,
                    fontSize: '2.25rem',
                    marginBottom: '0.5em',
                }}
            >
                Better Prompts <br /> For Better{' '}
                <Box component="span" className="ai">
                    AI
                </Box>
            </Typography>
            <Typography sx={{ marginBottom: '1.5em' }}>
                Optimize your AI interactions by crafting precise, customized
                instructions for{' '}
                <Box component="span" sx={{ fontWeight: 700 }}>
                    Google Gemini.
                </Box>
            </Typography>
            <Typography>
                <Box component="span" className="five-stars">
                    Five Stars
                </Box>{' '}
                Prompting,
            </Typography>
            <Typography>One Powerful AI Result</Typography>
            <Button
                variant="contained"
                type="button"
                sx={{ ...styles.primaryButton, margin: '1em' }}
                onClick={onFocusInput}
                aria-label="Apply focus to the first pentagram field"
            >
                Start now
            </Button>
            <Typography sx={{ fontSize: styles.typography.fontSizeNormal }}>
                Try it, it's free
            </Typography>
        </Box>
    );
};

export default Hero;
