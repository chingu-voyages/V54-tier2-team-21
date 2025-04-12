import { z } from 'zod';
import { inputFormSchema, inputLoginSchema } from './assets/inputFormSchema';
import { RefObject } from 'react';

export type Inputs = z.infer<typeof inputFormSchema>;

export type LoginForm = z.infer<typeof inputLoginSchema>;

export type FormField = {
    name: 'persona' | 'context' | 'task' | 'output' | 'constraint';
    description: string;
    placeholder: string;
};

export type FormComponentProps = {
    onFormSubmit: (data: Inputs) => void;
    ref: RefObject<HTMLInputElement | null>;
};

export type HeaderComponentProps = {
    handleSignupClick: () => void;
    page: string;
    isLoggedIn: boolean;
    handleLogout: () => void;
};

export type LoginComponentProps = {
    handleLoginClick: (data: LoginForm) => void;
    handleSwitchLoginPageClick: () => void;
    page: string;
    loginError: string;
};

export type TeamMembers = {
    name: string;
    linkedIn?: string;
    gitHub: string;
};
