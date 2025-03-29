import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styles } from '../styles';

const teamMembers: string[] = [
    'Adil Rahman',
    'Gisele Tibam',
    'Andreea Tohatan',
    "Mark O'Brien",
    'Denys Melnyk',
    'Niamh Brown',
    'Estelle Couture',
    'Yusuf Mohsen',
];

const Footer = () => {
    return (
        <Container
            component="footer"
            sx={{
                backgroundColor: styles.colors.footerBackground,
                margin: 0,
                color: styles.colors.fontPrimary,
                height: '280px',
                padding: '1.5em 1.5em 0.75em 1.5em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Container
                id="team-container"
                maxWidth="xs"
                disableGutters
                sx={{
                    margin: '0',
                    padding: '0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    '@media (min-width: 0px)': {
                        width: '100%',
                        maxWidth: '100%',
                    },
                }}
            >
                <Container disableGutters>
                    <Box
                        component="img"
                        src="./src/assets/logo.png"
                        alt="Five star api logo"
                        sx={{
                            width: '95px',
                            height: '32px',
                            position: 'relative',
                            left: '-7px',
                            marginBottom: '0.5em',
                        }}
                    />
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            textAlign: 'left',
                            maxWidth: '200px',
                        }}
                    >
                        <Grid size={12}>
                            <Typography
                                sx={{
                                    fontSize: styles.typography.fontSizeSmall,
                                    fontWeight: 'bold',
                                    marginBottom: '0.5em',
                                }}
                            >
                                Team
                            </Typography>
                        </Grid>
                        {teamMembers.map((member) => {
                            return (
                                <Grid size={6}>
                                    <Typography
                                        sx={{
                                            fontSize:
                                                styles.typography.fontSizeSmall,
                                            color: styles.colors.fontSecondary,
                                        }}
                                    >
                                        {member}
                                    </Typography>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
                <Container
                    disableGutters
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.1em',
                        '@media (min-width: 0px)': {
                            maxWidth: '135px',
                        },
                    }}
                >
                    <Box
                        component="img"
                        src="./src/assets/chingu-logo.png"
                        alt="Chingu logo"
                        sx={{
                            width: '30px',
                            height: '30px',
                            marginBottom: '1em',
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: styles.typography.fontSizeExtraSmall,
                            color: styles.colors.fontSecondary,
                        }}
                    >
                        This project was built by team 21
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: styles.typography.fontSizeExtraSmall,
                            color: styles.colors.fontSecondary,
                        }}
                    >
                        as part of the Chingu Voyage 54
                    </Typography>
                </Container>
            </Container>
            <Container
                sx={{
                    textAlign: 'center',
                }}
            >
                <Link
                    href="https://github.com/chingu-voyages/V54-tier2-team-21"
                    aria-label="Voyage Team 21 GitHub repository"
                >
                    <Typography
                        sx={{
                            fontSize: styles.typography.fontSizeExtraSmall,
                            color: styles.colors.fontPrimary,
                        }}
                    >
                        <GitHubIcon sx={{ cursor: 'pointer' }} />
                    </Typography>
                </Link>

                <Typography
                    component="p"
                    sx={{
                        fontSize: styles.typography.fontSizeExtraSmall,
                        marginTop: '0.5em',
                    }}
                >
                    &copy; 2025 Chingu. All rights reserved.
                </Typography>
            </Container>
        </Container>
    );
};

export default Footer;
