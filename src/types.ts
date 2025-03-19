export type Inputs = {
    persona: string;
    context: string;
    task: string;
    output: string;
    constraint: string;
};

export type FormComponentProps = {
    onFormSubmit: (data: Inputs) => void;
};
