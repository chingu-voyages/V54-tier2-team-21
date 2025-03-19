import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, FormComponentProps } from '../types';

const Form = ({ onFormSubmit }: FormComponentProps) => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id="persona"
                label="Persona"
                variant="outlined"
                {...register('persona')}
                sx={{ m: 2 }}
                multiline
                rows={5}
            />
            <TextField
                id="context"
                label="Context"
                variant="outlined"
                {...register('context')}
                sx={{ m: 2 }}
                multiline
                rows={5}
            />
            <TextField
                id="task"
                label="Task"
                variant="outlined"
                {...register('task')}
                sx={{ m: 2 }}
                multiline
                rows={5}
            />
            <TextField
                id="output"
                label="Output"
                variant="outlined"
                {...register('output')}
                sx={{ m: 2 }}
                multiline
                rows={5}
            />
            <TextField
                id="constraint"
                label="Constraint"
                variant="outlined"
                {...register('constraint')}
                sx={{ m: 2 }}
                multiline
                rows={5}
            />
            <Button variant="contained" type="submit" sx={{ m: 2 }}>
                Generate
            </Button>
        </form>
    );
};

export default Form;
