import { Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styles } from '../styles';
import { HeaderComponentProps } from '../types';
import { getMonth, getYear } from '../utils/utils';

const Header = ({
    handleSignupClick,
    page,
    isLoggedIn,
    handleLogout,
}: HeaderComponentProps) => {
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
            <Box
                component="img"
                src="/logo.png"
                alt="Five star api logo"
                sx={{
                    width: '95px',
                    height: '32px',
                }}
            />
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                {page === '' && (
                    <Button
                        variant="contained"
                        type="button"
                        sx={{ ...styles.secondaryButton }}
                        onClick={isLoggedIn ? handleLogout : handleSignupClick}
                    >
                        {isLoggedIn ? 'Logout' : 'Sign up'}
                    </Button>
                )}
                <Typography sx={{ fontSize: styles.typography.fontSizeSmall }}>
                    {getMonth()} {getYear()}
                </Typography>
            </Container>
        </Container>
    );
};

export default Header;
