import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styles } from '../styles';
interface ResultProps {
    result: string;
}
const Result = ({ result }: ResultProps) => {
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
            }}
        >
            {result ? (
                <Typography sx={{ m: 2, color: styles.colors.fontPrimary }}>
                    {result}
                </Typography>
            ) : (
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minHeight: '250px',
                        justifyContent: 'center',
                        flexGrow: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="./src/assets/gemini-logo.png"
                        alt="Blue diamond with arched edges"
                        sx={{
                            width: '72px',
                            height: '72px',
                        }}
                    />
                    <Typography
                        sx={{ m: 2, color: styles.colors.fontSecondary }}
                    >
                        Gemini Google result
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Result;
