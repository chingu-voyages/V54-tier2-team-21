import { Button, TextField } from '@mui/material';
import { styles } from '../styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginComponentProps, LoginForm } from '../types';

const Login = ({ handleLoginClick }: LoginComponentProps) => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = (data) => handleLoginClick(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                {...register('email', {
                    required: true,
                })}
                sx={styles.textField}
            />
            <TextField
                id="password"
                label="Password"
                variant="outlined"
                {...register('password', {
                    required: true,
                })}
                sx={styles.textField}
            />
            <Button
                variant="contained"
                type="submit"
                sx={{ ...styles.primaryButton }}
            >
                Login
            </Button>
        </form>
    );
};

export default Login;
