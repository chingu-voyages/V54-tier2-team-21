const capitalise = (str: string) => str[0].toUpperCase() + str.slice(1);

const formatPrompt = (prompt: string) => {
    const startsWithUpperCase = /[A-Z]/.test(prompt.charAt(0));
    const endWithFullstop = prompt.endsWith('.');

    if (endWithFullstop && startsWithUpperCase) return prompt;

    if (endWithFullstop) return capitalise(prompt);

    return (startsWithUpperCase ? prompt : capitalise(prompt)) + '.';
};

export { formatPrompt, capitalise };
