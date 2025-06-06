import { Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormComponentProps, FormField, Inputs, FieldName } from '../types';
import ClearIcon from '@mui/icons-material/Clear';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputAdornment from '@mui/material/InputAdornment';
import { capitalise } from '../utils/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputFormSchema } from '../assets/inputFormSchema';
import { styles } from '../styles';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition';
import MicIcon from '@mui/icons-material/Mic';

const formFields: FormField[] = [
    {
        name: 'persona',
        description: `"Know You, the Prompt Creator!"
Pick who you are prompting for, "as a 1st year university student, specialising in Jane Austen's novels" or "as a wheel-chair user grandparent looking for fun travel ideas with grandchildren"`,
        placeholder: `"As a first year medical student", "As a wheel-chair using parent"...`,
    },
    {
        name: 'context',
        description: `"Set the Scene!"
Give a quick backdrop "I intend to gather relevant quotes for a presentation for my Indian clients in manufacturing" or "I intend to search for easy, nutritious recipes for my picky eaters."`,
        placeholder: `"I intend to search for easy recipes for my children"...`,
    },
    {
        name: 'task',
        description: `"What's the Mission?"
State your goal  " Recommend must-read books on Italian architecture" or "List family-friendly events in Stockholm this weekend."`,
        placeholder: `"Please recommend must-read books on modern architecture"...`,
    },
    {
        name: 'output',
        description: `"How?"
Tell how you want the answer delivered: an essay, a bullet-point list, a brief summary, or step-by-step tips and the tone: professional, informal..`,
        placeholder: `"I want the answer delivered in a bullet-point list in a professional tone"..`,
    },
    {
        name: 'constraint',
        description: `"Keep It Tight!"
Set the boundaries: "US based only", "In British English", "no hyphenation", "Avoid complex jargon", or "In three words"...`,
        placeholder: `"In 100 words only and avoid technical words`,
    },
];

const Form = ({ onFormSubmit, ref }: FormComponentProps) => {
    const [buttonClicked, setButtonClicked] = useState({
        persona: false,
        context: false,
        task: false,
        output: false,
        constraint: false,
    });

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
        document.getElementById(field.name)?.focus();
    };

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
        useSpeechRecognition();

    function handleStartListening(fieldName: FieldName) {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
        setButtonClicked((prevState) => ({ ...prevState, [fieldName]: true }));
    }

    function handleStopListening(fieldName: FieldName) {
        SpeechRecognition.stopListening();
        setValue(fieldName, transcript);
        setButtonClicked((prevState) => ({ ...prevState, [fieldName]: false }));
    }

    return (
        <Box component="section" sx={{ marginTop: '4em' }}>
            <Typography
                variant="h3"
                sx={{
                    fontSize: styles.typography.fontSizeLarge,
                    fontWeight: 600,
                    marginBottom: '0.75em',
                }}
            >
                Build Your Prompt
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
                    {formFields.map((field, index) => (
                        <React.Fragment key={index}>
                            <span
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    marginBottom: '0.5em',
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        color: styles.colors.fontPrimary,
                                    }}
                                    htmlFor={field.name}
                                >
                                    {capitalise(field.name)}
                                </InputLabel>
                                <Tooltip
                                    title={field.description}
                                    role="tooltip"
                                >
                                    <span>
                                        {/* Use a span as a wrapper to avoid aria-hidden issue */}
                                        <HelpOutlineIcon tabIndex={0} />
                                    </span>
                                </Tooltip>
                            </span>
                            {errors[field.name] && (
                                <Typography
                                    color="error"
                                    variant="caption"
                                    sx={{
                                        ...styles.errors,
                                        mb: 1,
                                    }}
                                >
                                    {errors[field.name]?.message}
                                </Typography>
                            )}
                            <span
                                id={`${field.name}desc`}
                                className="visually-hidden"
                            >
                                {field.description}
                            </span>

                            <TextField
                                key={field.name}
                                id={field.name}
                                aria-describedby={`${field.name}desc`}
                                variant="outlined"
                                {...register(field.name)}
                                error={!!errors[field.name]}
                                sx={{ ...styles.textField }}
                                multiline
                                rows={5}
                                slotProps={{
                                    input: {
                                        placeholder: field.placeholder,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 8,
                                                    }}
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            clearField(field)
                                                        }
                                                        sx={{
                                                            padding: '0',
                                                            color: styles.colors
                                                                .fontPrimary,
                                                            cursor: 'pointer',
                                                            minWidth: '25px',
                                                        }}
                                                        aria-label={`Clear content in the ${field.name} field`}
                                                    >
                                                        <ClearIcon role="none" />
                                                    </Button>
                                                    {browserSupportsSpeechRecognition && (
                                                        <Button
                                                            aria-label={`Hold down button and dictate what you want to put into the ${field.name} field`}
                                                            sx={{
                                                                padding: '0',
                                                                cursor: 'pointer',
                                                                minWidth:
                                                                    '25px',
                                                            }}
                                                            onTouchStart={() => {
                                                                handleStartListening(
                                                                    field.name
                                                                );
                                                            }}
                                                            onMouseDown={() => {
                                                                handleStartListening(
                                                                    field.name
                                                                );
                                                            }}
                                                            onTouchEnd={() => {
                                                                handleStopListening(
                                                                    field.name
                                                                );
                                                            }}
                                                            onMouseUp={() => {
                                                                handleStopListening(
                                                                    field.name
                                                                );
                                                            }}
                                                        >
                                                            <MicIcon
                                                                role="none"
                                                                sx={{
                                                                    color: !buttonClicked[
                                                                        field
                                                                            .name
                                                                    ]
                                                                        ? styles
                                                                              .colors
                                                                              .fontPrimary
                                                                        : 'red',
                                                                }}
                                                            />
                                                        </Button>
                                                    )}
                                                </Box>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                inputRef={index === 0 ? ref : null}
                                tabIndex={0}
                            />
                        </React.Fragment>
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
