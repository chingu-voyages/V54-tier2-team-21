import { Button, TextField, Box, Typography } from '@mui/material';
import { styles } from '../styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginComponentProps, LoginForm } from '../types';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputLoginSchema } from '../assets/inputFormSchema';

const Login = ({
    handleLoginClick,
    handleSwitchLoginPageClick,
    page,
    loginError,
}: LoginComponentProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginForm>({ resolver: zodResolver(inputLoginSchema) });

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
                            minHeight: '400px',
                        }}
                    >
                        <TextField
                            id="email"
                            variant="outlined"
                            {...register('email')}
                            sx={{ ...styles.textField, mb: 0 }}
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
                            error={!!errors['email']}
                        />
                        {errors['email'] && (
                            <Typography
                                color="error"
                                variant="caption"
                                sx={{ ml: 1, textAlign: 'left' }}
                            >
                                {errors['email']?.message}
                            </Typography>
                        )}
                        <TextField
                            id="password"
                            variant="outlined"
                            type="password"
                            {...register('password')}
                            sx={{ ...styles.textField, mt: 1, mb: 0 }}
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
                            error={!!errors['email']}
                        />
                        {errors['password'] && (
                            <Typography
                                color="error"
                                variant="caption"
                                sx={{ ml: 1, textAlign: 'left' }}
                            >
                                {errors['password']?.message}
                            </Typography>
                        )}
                        {loginError && (
                            <Typography
                                color="error"
                                variant="caption"
                                sx={{
                                    ml: 1,
                                    textAlign: 'left',
                                    fontSize: '.9rem',
                                }}
                            >
                                {loginError}
                            </Typography>
                        )}
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
                    onClick={() => {
                        reset();
                        handleSwitchLoginPageClick();
                    }}
                >
                    {page === 'signup' ? 'Login' : 'Sign up'}
                </Button>
            </Box>
        </>
    );
};

export default Login;
