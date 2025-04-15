import { Box, Typography } from '@mui/material';

const Dashboard = () => {
    return (
        <Box
            sx={{
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4">You are now in the dashboard</Typography>
        </Box>
    );
};

export default Dashboard;
