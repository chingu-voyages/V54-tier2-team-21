import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, FormComponentProps } from '../types';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';

const Form = ({ onFormSubmit }: FormComponentProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>();

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
                {...register('persona', {
                    required: true,
                })}
                error={!!errors.persona}
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
                {...register('context', {
                    required: true,
                })}
                error={!!errors.context}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('context')}
                                    className="clear-icon"
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
                {...register('task', {
                    required: true,
                })}
                error={!!errors.task}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('task')}
                                    className="clear-icon"
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                id="output"
                label="Output"
                variant="outlined"
                {...register('output', {
                    required: true,
                })}
                error={!!errors.output}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('output')}
                                    className="clear-icon"
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
                {...register('constraint', {
                    required: true,
                })}
                error={!!errors.constraint}
                sx={{ m: 2 }}
                multiline
                rows={5}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon
                                    onClick={() => clearField('constraint')}
                                    className="clear-icon"
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
