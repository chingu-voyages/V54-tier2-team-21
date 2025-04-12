import { Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styles } from '../styles';
import { getMonth, getYear } from '../utils/utils';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

const Header = ({ isLoggedIn, handleLogout }) => {
    const navigate = useNavigate();
    console.log(isLoggedIn);
    return (
        <Container
            component="header"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75em 0.5em',
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
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <Link
                    component={RouterLink}
                    to="dashboard"
                    sx={styles.secondaryButton}
                    underline="none"
                >
                    DASHBOARD
                </Link>
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
                <Typography sx={{ fontSize: styles.typography.fontSizeSmall }}>
                    {getMonth()} {getYear()}
                </Typography>
            </Container>
        </Container>
    );
};

export default Header;
