import { z } from 'zod';

// update what we want required, min length etc
export const inputFormSchema = z.object({
    persona: z.string().min(1, 'Persona is required'),
    context: z.string().min(1, 'Context is required'),
    task: z.string().min(1, 'Task is required'),
    output: z.string().min(1, 'Output is required'),
    constraint: z.string().min(1, 'Constraint is required'),
});

export const inputLoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email address is required' })
        .email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' })
        .max(20, { message: 'Password cannot be more than 20 characters' }),
});
