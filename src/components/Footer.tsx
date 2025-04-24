import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styles } from '../styles';
import { TeamMembers } from '../types';

const teamMembers: TeamMembers[] = [
    {
        name: 'Adil Rahman',
        linkedIn: 'https://www.linkedin.com/in/adil-rahman1/',
        gitHub: 'https://github.com/adil-rahman1',
    },
    {
        name: 'Gisele Tibam',
        linkedIn: 'https://github.com/Gisele-1',
        gitHub: 'https://www.linkedin.com/in/tibam-gisele-684781129',
    },
    {
        name: 'Andreea Tohatan',
        linkedIn: 'https://linkedin.com/in/andreea-anamaria-tohatan/',
        gitHub: 'https://github.com/Andreea-A-T',
    },
    { name: "Mark O'Brien", gitHub: 'https://github.com/thenotoriousob' },
    {
        name: 'Denys Melnyk',
        linkedIn: 'https://www.linkedin.com/in/denys-melnyk7/',
        gitHub: 'https://github.com/TheDrakl',
    },
    {
        name: 'Niamh Brown',
        linkedIn: 'https://www.linkedin.com/in/niamh-brown1/',
        gitHub: 'https://github.com/NiamhBrown',
    },
    {
        name: 'Estelle Couture',
        linkedIn: 'https://www.linkedin.com/in/estelle-couture-41422b47/',
        gitHub: 'https://github.com/Escargotte',
    },
    {
        name: 'Yusuf Mohsen',
        linkedIn: 'https://www.linkedin.com/in/yusuf-mohsiin/',
        gitHub: 'https://github.com/yusufmohsiin',
    },
];

const Footer = () => {
    return (
        <Container
            component="footer"
            sx={{
                backgroundColor: styles.colors.footerBackground,
                margin: 0,
                color: styles.colors.fontPrimary,
                padding: '1.5em 1.5em 0.75em 1.5em',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1em',
                }}
            >
                <Box
                    component="img"
                    src="/logo.png"
                    alt="Five star api logo"
                    sx={{
                        width: '95px',
                        height: '32px',
                        position: 'relative',
                        left: '-7px',
                        marginBottom: '0.5em',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.1em',
                        marginRight: 0,
                    }}
                >
                    <Box
                        component="img"
                        src="./chingu-logo.png"
                        alt="Chingu logo"
                        sx={{
                            width: '30px',
                            height: '30px',
                            marginBottom: '1em',
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: styles.typography.fontSizeSmall,
                            color: styles.colors.fontSecondary,
                        }}
                    >
                        This project was built by team 21
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: styles.typography.fontSizeSmall,
                            color: styles.colors.fontSecondary,
                        }}
                    >
                        as part of the Chingu Voyage 54
                    </Typography>
                </Box>
            </Box>
            <Container
                id="team-container"
                disableGutters
                sx={{
                    margin: '0',
                    padding: '0',
                    '@media (min-width: 0px)': {
                        width: '100%',
                        maxWidth: '100%',
                    },
                    marginBottom: '2em',
                }}
            >
                <Box sx={{ textAlign: 'left' }}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            textAlign: 'left',
                            maxWidth: '400px',
                        }}
                    >
                        <Grid size={12}>
                            <Typography
                                sx={{
                                    fontSize: styles.typography.fontSizeNormal,
                                    fontWeight: 'bold',
                                    marginBottom: '0.5em',
                                }}
                            >
                                Team
                            </Typography>
                        </Grid>
                        {teamMembers.map((member) => {
                            return (
                                <Grid
                                    size={6}
                                    key={member.name}
                                    sx={{
                                        display: 'flex',
                                        gap: '18px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Link
                                        href={member.linkedIn}
                                        aria-label={`LinkedIn account for ${member.name}`}
                                        underline="none"
                                    >
                                        <Typography
                                            sx={{
                                                fontSize:
                                                    styles.typography
                                                        .fontSizeNormal,
                                                color: styles.colors
                                                    .fontSecondary,
                                                '&:hover, &:focus': {
                                                    fontWeight: 'bold',
                                                },
                                            }}
                                        >
                                            {member.name}
                                        </Typography>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
            <Container>
                <Typography
                    sx={{
                        fontSize: styles.typography.fontSizeSmall,
                        marginBottom: '0.5em',
                    }}
                >
                    Github Repo
                </Typography>
                <Link
                    href="https://github.com/chingu-voyages/V54-tier2-team-21"
                    aria-label="Voyage Team 21 GitHub repository"
                >
                    <Typography
                        sx={{
                            fontSize: styles.typography.fontSizeSmall,
                            color: styles.colors.fontPrimary,
                        }}
                    >
                        <GitHubIcon role="none" />
                    </Typography>
                </Link>

                <Typography
                    component="p"
                    sx={{
                        fontSize: styles.typography.fontSizeSmall,
                        marginTop: '1em',
                    }}
                >
                    &copy; 2025 Chingu. All rights reserved.
                </Typography>
            </Container>
        </Container>
    );
};

export default Footer;
