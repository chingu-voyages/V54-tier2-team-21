import { Button, TextField, Box, Typography } from '@mui/material';
import { styles } from '../styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginComponentProps, LoginForm } from '../types';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';

const Login = ({
    handleLoginClick,
    handleSwitchLoginPageClick,
    page,
}: LoginComponentProps) => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = (data) => handleLoginClick(data);

    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2em',
                }}
            >
                {page === 'signup' ? 'Sign up' : 'Login'}
            </Typography>
            <Box
                component="section"
                sx={{
                    ...styles.loginContainer,
                    paddingBottom: '3em',
                    minHeight: '400px',
                    margin: '3em 1.25em',
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '10px',
                            height: '400px',
                        }}
                    >
                        <TextField
                            id="email"
                            variant="outlined"
                            {...register('email', {
                                required: true,
                            })}
                            sx={{ ...styles.textField }}
                            slotProps={{
                                input: {
                                    placeholder: 'Email',
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon
                                                sx={{
                                                    color: '#C4BFBF',
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <TextField
                            id="password"
                            variant="outlined"
                            type="password"
                            {...register('password', {
                                required: true,
                            })}
                            sx={{ ...styles.textField }}
                            slotProps={{
                                input: {
                                    placeholder:
                                        page === 'signup'
                                            ? 'Create Password'
                                            : 'Enter Password',
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon
                                                sx={{
                                                    color: '#C4BFBF',
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                ...styles.primaryButton,
                                width: '100%',
                                borderRadius: '4px',
                            }}
                        >
                            Continue
                        </Button>
                    </Container>
                </form>
                <Typography>
                    {page === 'signup'
                        ? `Already have an account?`
                        : `Don't have an account?`}
                </Typography>
                <Button
                    variant="text"
                    sx={{
                        textTransform: 'none',
                        padding: 0,
                        color: styles.colors.fontPrimary,
                        fontWeight: 700,
                        fontSize: '1rem',
                    }}
                    onClick={handleSwitchLoginPageClick}
                >
                    {page === 'signup' ? 'Login' : 'Sign up'}
                </Button>
            </Box>
        </>
    );
};

export default Login;
