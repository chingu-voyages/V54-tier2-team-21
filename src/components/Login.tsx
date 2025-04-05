import { Button, TextField, Box } from '@mui/material';
import { styles } from '../styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginComponentProps, LoginForm } from '../types';
import Container from '@mui/material/Container';

const Login = ({ handleLoginClick }: LoginComponentProps) => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = (data) => handleLoginClick(data);

    return (
        <Box
            component="section"
            sx={{
                ...styles.loginContainer,
                padding: 2,
                minHeight: '400px',
                margin: '20px',
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
                        label="Email"
                        variant="outlined"
                        {...register('email', {
                            required: true,
                        })}
                        sx={{ ...styles.textField }}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        {...register('password', {
                            required: true,
                        })}
                        sx={{ ...styles.textField }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ ...styles.primaryButton }}
                    >
                        Login
                    </Button>
                </Container>
            </form>
        </Box>
    );
};

export default Login;
