const capitalise = (str: string) => str[0].toUpperCase() + str.slice(1);

const formatPrompt = (prompt: string) => {
    const startsWithUpperCase = /[A-Z]/.test(prompt.charAt(0));
    const endWithFullstop = prompt.endsWith('.');

    if (endWithFullstop && startsWithUpperCase) return prompt;

    if (endWithFullstop) return capitalise(prompt);

    return (startsWithUpperCase ? prompt : capitalise(prompt)) + '.';
};

function setCookie(name: string, value: string, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; SameSite=Strict`;
}

function clearCookie(name: string) {
    document.cookie = `${name}=;  path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=Strict`;
}

function getMonth() {
    const dateObj = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return months[dateObj.getMonth()];
}

function getYear() {
    const dateObj = new Date();
    return dateObj.getFullYear();
}

export { formatPrompt, capitalise, setCookie, clearCookie, getMonth, getYear };
