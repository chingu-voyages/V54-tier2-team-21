import { formatPrompt } from '../utils/utils';

import '@testing-library/jest-dom/vitest';
import { describe, expect } from 'vitest';

describe('format prompt', () => {
    it('returns the passed in prompt if it contains a full stop and start with capital', () => {
        const prompt = 'This is my best prompt.';

        expect(formatPrompt(prompt)).toBe(prompt);
    });

    it('returns a prompt with a full stop if its missing and the prompt starts with capital', () => {
        const prompt = 'This is my best prompt';

        expect(formatPrompt(prompt)).toBe(prompt + '.');
    });

    it('returns a prompt with a capital if is missing and the prompt has a full stop', () => {
        const prompt = 'this is my best prompt.';

        expect(formatPrompt(prompt)).toBe('This is my best prompt.');
    });

    it('returns a prompt with a capital and a full stop if they are missing and the prompt starts with', () => {
        const prompt = 'this is my best prompt';

        expect(formatPrompt(prompt)).toBe('This is my best prompt.');
    });
});
