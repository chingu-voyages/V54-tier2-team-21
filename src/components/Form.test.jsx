import { render, screen } from '@testing-library/react';

import Form from './Form';

import '@testing-library/jest-dom/vitest';
import { describe } from 'vitest';

describe('Form', () => {
    beforeEach(() => {
        render(<Form />);
    });

    it('renders with a Generate button', () => {
        const generateButton = screen.getByRole('button', {
            name: /generate/i,
        });

        expect(generateButton).toBeEnabled();
        expect(generateButton).toBeInTheDocument();
    });

    it('renders with 5 blank text areas', () => {
        const textAreas = screen.getAllByRole('textbox');

        expect(textAreas).toHaveLength(5);
        expect(textAreas[0].value).toBe('');
        expect(textAreas[1].value).toBe('');
        expect(textAreas[2].value).toBe('');
        expect(textAreas[3].value).toBe('');
        expect(textAreas[4].value).toBe('');
    });
});
