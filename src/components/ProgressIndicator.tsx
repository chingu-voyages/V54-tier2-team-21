import CircularProgress from '@mui/material/CircularProgress';

const ProgressIndicator = () => {
    return (
        <>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient
                        id="my_gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#8A00F9" />
                        <stop offset="100%" stopColor="#FD99FF" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress
                sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
            />
        </>
    );
};

export default ProgressIndicator;
