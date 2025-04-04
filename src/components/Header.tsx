import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styles } from '../styles';

const Header = () => {
    return (
        <Container
            component="header"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75em',
                borderBottom: '1px solid #3A3737',
            }}
        >
            <Box
                component="img"
                src="/logo.png"
                alt="Five star api logo"
                sx={{
                    width: '95px',
                    height: '32px',
                }}
            />
            <Typography sx={{ fontSize: styles.typography.fontSizeSmall }}>
                April 2025
            </Typography>
        </Container>
    );
};

export default Header;
