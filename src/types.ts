import { z } from 'zod';
import { inputFormSchema } from './assets/inputFormSchema';

export type Inputs = z.infer<typeof inputFormSchema>;

export type LoginForm = {
    email: string;
    password: string;
};

export type FormField = {
    name: 'persona' | 'context' | 'task' | 'output' | 'constraint';
    description: string;
};

export type FormComponentProps = {
    onFormSubmit: (data: Inputs) => void;
};

export type HeaderComponentProps = {
    handleDisplayLogin: () => void;
    displayLogin: boolean;
    isLoggedIn: boolean;
    handleLogout: () => void;
};

export type LoginComponentProps = {
    handleLoginClick: (data: LoginForm) => void;
};

export type TeamMembers = {
    name: string;
    linkedIn?: string;
    gitHub: string;
};
