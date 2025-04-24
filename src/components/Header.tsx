import { Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styles } from '../styles';
import { getMonth, getYear } from '../utils/utils';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { HeaderComponentProps } from '../types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ isLoggedIn, handleLogout }: HeaderComponentProps) => {
    const navigate = useNavigate();

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
            <Typography variant="h1" className="visually-hidden">
                5 STAR API
            </Typography>
            <RouterLink to="/">
                <Box
                    component="img"
                    src="/logo.png"
                    alt="Five star api logo"
                    sx={{
                        width: '95px',
                        height: '32px',
                    }}
                />
            </RouterLink>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                {isLoggedIn ? (
                    <Button
                        onClick={() => {
                            handleLogout();
                            navigate('/');
                        }}
                        sx={styles.secondaryButton}
                    >
                        LOG OUT
                    </Button>
                ) : (
                    <Link
                        component={RouterLink}
                        to="register"
                        sx={styles.secondaryButton}
                        underline="none"
                    >
                        SIGN UP
                    </Link>
                )}
                <Link
                    component={RouterLink}
                    to="dashboard"
                    sx={{
                        color: styles.colors.fontPrimary,
                        height: '24px',
                    }}
                >
                    <AccountCircleIcon role="none" />
                </Link>
                <Typography sx={{ fontSize: styles.typography.fontSizeSmall }}>
                    {getMonth()} {getYear()}
                </Typography>
            </Box>
        </Container>
    );
};

export default Header;
