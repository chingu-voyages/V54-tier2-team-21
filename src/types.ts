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
    isLoggedIn: boolean;
    handleLogout: () => void;
};

export type LoginComponentProps = {
    handleLogin: () => void;
    page: string;
};

export type LayoutComponentProps = {
    isLoggedIn: boolean;
    handleLogout: () => void;
    token: { token: string; refresh: string };
};

export type TeamMembers = {
    name: string;
    linkedIn?: string;
    gitHub: string;
};

export type PreviousPrompt = {
    public_id: string;
    user: number;
    email: string;
    id: number;
    prompt_text: string;
    model: string;
    created_at: Date;
    prompt_response: string;
};

export type PreviousPrompts = { previousPrompts: PreviousPrompt[] };

export type DashBoardComponentProps = {
    token: { token: string; refresh: string };
    previousPrompts: PreviousPrompt[];
    handlePreviousPrompts: (data: PreviousPrompts) => void;
};

export type FieldName =
    | 'persona'
    | 'context'
    | 'task'
    | 'output'
    | 'constraint';

export type Token = { token: { token: string; refresh: string } };
