import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Container component="footer">
            {/* <Typography
                component="p"
                sx={{
                    textAlign: 'left',
                }}
            >
                
            </Typography> */}
            <Container
                id="team-container"
                sx={{
                    maxWidth: 300,
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
                    <Grid size={6}>
                        <Typography>Adil Rahman</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Tibam Gisele</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Andreea Tohatan</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Mark O'Brien</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Denys Melnyk</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Niamh Brown</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Estelle Couture</Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography>Yusuf Mohsen</Typography>
                    </Grid>
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
