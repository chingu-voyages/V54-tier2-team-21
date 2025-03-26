import {
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

const formFields: FormField[] = [
    {
        name: 'persona',
        description: `"Know You, the Prompt Creator!"
Pick who you are prompting for, "as a 1st year university student, specialising in Jane Austen's novels" or "as a wheel-chair user grandparent looking for fun travel ideas with grandchildren"`,
    },
    {
        name: 'context',
        description: `"Set the Scene!"
Give a quick backdrop "I intend to gather relevant quotes for a presentation for my Indian clients in manufacturing" or "I intend to search for easy, nutritious recipes for my picky eaters."`,
    },
    {
        name: 'task',
        description: `"What's the Mission?"
State your goal  " Recommend must-read books on Italian architecture" or "List family-friendly events in Stockholm this weekend."`,
    },
    {
        name: 'output',
        description: `"How?"
Tell how you want the answer delivered: an essay, a bullet-point list, a brief summary, or step-by-step tips and the tone: professional, informal..`,
    },
    {
        name: 'constraint',
        description: `"Keep It Tight!"
Set the boundaries: "US based only", "In British English", "no hyphenation", "Avoid complex jargon", or "In three words"...`,
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
        <form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
                <>
                    <span
                        style={{
                            display: 'inline-block',
                            alignSelf: 'flex-start',
                        }}
                    >
                        <Tooltip title={field.description}>
                            <IconButton>
                                <HelpOutlineIcon />
                            </IconButton>
                        </Tooltip>
                    </span>

                    <TextField
                        key={field.name}
                        id={field.name}
                        label={capitalise(field.name)}
                        variant="outlined"
                        {...register(field.name, {
                            required: true,
                        })}
                        error={!!errors[field.name]} // explain
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
            <Button variant="contained" type="submit" sx={{ m: 2 }}>
                Generate
            </Button>
        </form>
    );
};

export default Form;
