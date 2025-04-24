import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const NotFound = () => {
    return (
        <Container sx={{ minHeight: '400px', mt: 4 }}>
            <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 2 }}>
                Sorry, the page you were looking for was not found.
            </Typography>
            <Link component={RouterLink} to="/" sx={{ color: '#FFFFFF' }}>
                Return to Home
            </Link>
        </Container>
    );
};

export default NotFound;
