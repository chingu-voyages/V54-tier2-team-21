import { Button } from '@mui/material';

interface PromptProps {
    prompt: string;
    onPromptSubmit: (prompt: string) => void;
}

const Prompt = ({ prompt, onPromptSubmit }: PromptProps) => {
    return (
        <>
            <p>{prompt}</p>
            <Button
                variant="contained"
                type="submit"
                sx={{ m: 2 }}
                onClick={() => onPromptSubmit(prompt)}
            >
                Submit
            </Button>
        </>
    );
};

export default Prompt;
