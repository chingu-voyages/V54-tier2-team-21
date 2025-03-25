export type Inputs = {
    persona: string;
    context: string;
    task: string;
    output: string;
    constraint: string;
};

export type FormField = {
    name: 'persona' | 'context' | 'task' | 'output' | 'constraint';
    description: string;
    // input: string;
};

export type FormComponentProps = {
    onFormSubmit: (data: Inputs) => void;
};
