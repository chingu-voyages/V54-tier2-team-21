import { Inputs } from '../types';

interface PromptProps {
    formData: Inputs;
}

const Prompt = ({ formData }: PromptProps) => {
    return <p>{Object.values(formData).join(' ')}</p>;
};

export default Prompt;
