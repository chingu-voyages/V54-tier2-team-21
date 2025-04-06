import { z } from 'zod';
import { inputFormSchema } from './assets/inputFormSchema';
import { RefObject } from 'react';

export type Inputs = z.infer<typeof inputFormSchema>;

export type FormField = {
    name: 'persona' | 'context' | 'task' | 'output' | 'constraint';
    description: string;
};

export type FormComponentProps = {
    onFormSubmit: (data: Inputs) => void;
    ref: RefObject<HTMLInputElement | null>;
};

export type TeamMembers = {
    name: string;
    linkedIn?: string;
    gitHub: string;
};
