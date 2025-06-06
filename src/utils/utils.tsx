import showdown from 'showdown';

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

function getCookie(name: string) {
    const cookies = document.cookie.split(';');
    const cookieName = `${name}=`;

    for (const cookie of cookies) {
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length);
        }
    }

    return '';
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

function convertResult(response: string) {
    const converter = new showdown.Converter();

    const convertedResult = converter.makeHtml(response);

    return convertedResult;
}

export {
    formatPrompt,
    capitalise,
    setCookie,
    clearCookie,
    getMonth,
    getYear,
    getCookie,
    convertResult,
};
