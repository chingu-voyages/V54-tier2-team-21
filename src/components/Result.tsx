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
                ...styles.displayContainer,
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
                        ...styles.flexColumn,
                        alignItems: 'center',
                        minHeight: '250px',
                        justifyContent: 'center',
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
