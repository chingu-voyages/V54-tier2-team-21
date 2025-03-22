import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

const teamMembers: Array<string> = [
    'Adil Rahman',
    'Tibam Gisele',
    'Andreea Tohatan',
    "Mark O'Brien",
    'Denys Melnyk',
    'Niamh Brown',
    'Estelle Couture',
    'Yusuf Mohsen',
];

const Footer = () => {
    return (
        <Container component="footer">
            <Container
                id="team-container"
                maxWidth="xs"
                sx={{
                    marginLeft: '0',
                    paddingLeft: '0',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    <Grid size={12}>
                        <Typography>Team members</Typography>
                    </Grid>
                    {teamMembers.map((member) => {
                        return (
                            <Grid size={6}>
                                <Typography>{member}</Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
            <Typography component="p">
                All rights reserved &copy; 2025 Chingu
            </Typography>
            <Link href="https://github.com/chingu-voyages/V54-tier2-team-21">
                <Typography>Github repo</Typography>
            </Link>
        </Container>
    );
};

export default Footer;
