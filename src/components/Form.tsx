import { Button, capitalize, TextField } from '@mui/material';
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

    const clearField = (field: keyof Inputs) => {
        setValue(field, '');
    };
    const formFields: Array<keyof Inputs> = [
        'persona',
        'context',
        'task',
        'constraint',
    ];
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {formFields.map((field) => (
                    <TextField
                        key={field}
                        id={field}
                        label={capitalize(field)}
                        variant="outlined"
                        {...register(field, {
                            required: true,
                        })}
                        error={!!errors[field]}
                        sx={{ m: 2 }}
                        multiline
                        rows={5}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ClearIcon
                                            onClick={() => clearField(field)}
                                            className="clear-icon"
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                ))}
                <Button variant="contained" type="submit" sx={{ m: 2 }}>
                    Generate
                </Button>
            </form>
        </>
    );
};

export default Form;
