import {
    Box,
    Button,
    IconButton,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormComponentProps, FormField, Inputs } from '../types';
import ClearIcon from '@mui/icons-material/Clear';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputAdornment from '@mui/material/InputAdornment';
import { capitalise } from '../utils/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputFormSchema } from '../assets/inputFormSchema';
import { styles } from '../styles';

const formFields: FormField[] = [
    {
        name: 'persona',
        description: '',
    },
    {
        name: 'context',
        description: '',
    },
    {
        name: 'task',
        description: '',
    },
    {
        name: 'output',
        description: '',
    },
    {
        name: 'constraint',
        description: '',
    },
];

const Form = ({ onFormSubmit }: FormComponentProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(inputFormSchema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onFormSubmit(data);
    };

    const clearField = (field: FormField) => {
        setValue(field.name, '');
    };
    return (
        <Box component="section" sx={{ marginTop: '4em' }}>
            <Typography
                variant="h4"
                sx={{
                    fontSize: styles.typography.fontSizeLarge,
                    fontWeight: 600,
                    marginBottom: '0.75em',
                }}
            >
                Pentagram it
            </Typography>
            <Typography sx={{ fontSize: styles.typography.fontSizeNormal }}>
                Remember to fill in ideas for all 5 prompts
            </Typography>
            <Typography sx={{ fontSize: styles.typography.fontSizeNormal }}>
                to generate an answer.
            </Typography>
            <Box
                component="section"
                sx={{
                    ...styles.flexColumn,
                    justifyContent: 'space-between',
                    ...styles.container,
                    padding: '1.5em 1em',
                    marginTop: '2em',
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    {formFields.map((field) => (
                        <>
                            <span
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: styles.colors.fontPrimary,
                                    }}
                                >
                                    {capitalise(field.name)}
                                </Typography>
                                <Tooltip
                                    title={field.description}
                                    id={field.name + 'tooltip'}
                                    role="tooltip"
                                >
                                    <IconButton
                                        sx={{
                                            color: styles.colors.fontPrimary,
                                        }}
                                    >
                                        <HelpOutlineIcon />
                                    </IconButton>
                                </Tooltip>
                            </span>

                            <TextField
                                key={field.name}
                                id={field.name}
                                aria-describedby={field.name + 'tooltip'}
                                variant="outlined"
                                {...register(field.name, {
                                    required: true,
                                })}
                                error={!!errors[field.name]}
                                sx={{ ...styles.textField }}
                                multiline
                                rows={5}
                                slotProps={{
                                    input: {
                                        placeholder: field.description,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <ClearIcon
                                                    onClick={() =>
                                                        clearField(field)
                                                    }
                                                    sx={{
                                                        color: styles.colors
                                                            .fontPrimary,
                                                    }}
                                                    className="clear-icon"
                                                />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                            {errors[field.name] && (
                                <Typography
                                    color="error"
                                    variant="caption"
                                    sx={{ ml: 2 }}
                                >
                                    {errors[field.name]?.message}
                                </Typography>
                            )}
                        </>
                    ))}
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ ...styles.primaryButton }}
                    >
                        Generate
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Form;
