import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, FormComponentProps } from '../types';
// import ClearIcon from '@mui/icons-material/Clear';

const Form = ({ onFormSubmit }: FormComponentProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id="persona"
                label="Persona"
                variant="outlined"
                {...register('persona', {
                    required: true,
                })}
                sx={{ m: 2 }}
                multiline
                rows={5}
                error={!!errors.persona}
            />
            <TextField
                id="context"
                label="Context"
                variant="outlined"
                {...register('context', {
                    required: true,
                })}
                sx={{ m: 2 }}
                multiline
                rows={5}
                error={!!errors.context}
            />
            <TextField
                id="task"
                label="Task"
                variant="outlined"
                {...register('task', {
                    required: true,
                })}
                sx={{ m: 2 }}
                multiline
                rows={5}
                error={!!errors.task}
            />
            <TextField
                id="output"
                label="Output"
                variant="outlined"
                {...register('output', {
                    required: true,
                })}
                sx={{ m: 2 }}
                multiline
                rows={5}
                error={!!errors.output}
            />
            <TextField
                id="constraint"
                label="Constraint"
                variant="outlined"
                {...register('constraint', {
                    required: true,
                })}
                sx={{ m: 2 }}
                multiline
                rows={5}
                error={!!errors.constraint}
            />
            <Button variant="contained" type="submit" sx={{ m: 2 }}>
                Generate
            </Button>
        </form>
    );
};

export default Form;
