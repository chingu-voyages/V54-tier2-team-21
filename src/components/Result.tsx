import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styles } from '../styles';
import Container from '@mui/material/Container';
import ProgressIndicator from './ProgressIndicator';

interface ResultProps {
    result: string;
    loading: boolean;
}

const Result = ({ result, loading }: ResultProps) => {
    return (
        <Box
            component="section"
            sx={{
                ...styles.container,
                p: 2,
            }}
        >
            {result ? (
                <Typography
                    sx={{
                        color: styles.colors.fontPrimary,
                    }}
                    dangerouslySetInnerHTML={{ __html: result }}
                    className="result"
                ></Typography>
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
                    {loading && (
                        <Container
                            sx={{
                                display: styles.flexRow,
                                justifyContent: 'center',
                                marginBottom: '1em',
                            }}
                        >
                            <ProgressIndicator />
                        </Container>
                    )}
                    <Box
                        component="img"
                        src="./public/gemini-logo.png"
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
