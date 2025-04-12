import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Layout = ({ handleLogout, isLoggedIn }) => {
    const theme = createTheme({
        typography: {
            fontFamily: `"Poppins", sans-serif`,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                sx={{
                    '@media (min-width: 0px)': {
                        maxWidth: 'sm',
                    },
                    backgroundImage: 'url("background.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
