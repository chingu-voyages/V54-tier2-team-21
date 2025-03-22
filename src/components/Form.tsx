import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, FormComponentProps } from '../types';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';

const Form = ({ onFormSubmit }: FormComponentProps) => {
    const { register, handleSubmit, setValue } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

    const clearField = (
        field: 'persona' | 'context' | 'task' | 'output' | 'constraint'
    ) => {
        setValue(field, '');
    };

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
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('persona')}
                                    className="clear-icon"
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                id="context"
                label="Context"
                variant="outlined"
                {...register('context')}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('context')}
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                id="task"
                label="Task"
                variant="outlined"
                {...register('task')}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon onClick={() => clearField('task')} />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                id="output"
                label="Output"
                variant="outlined"
                {...register('output')}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('output')}
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                id="constraint"
                label="Constraint"
                variant="outlined"
                {...register('constraint')}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('constraint')}
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Button variant="contained" type="submit" sx={{ m: 2 }}>
                Generate
            </Button>
        </form>
    );
};

export default Form;
