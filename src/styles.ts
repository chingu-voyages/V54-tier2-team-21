export const styles = {
    typography: {
        fontSizeExtraSmall: '8px',
        fontSizeSmall: '10px',
    },
    colors: {
        footerBackground: '#12141D',
        fontPrimary: '#FFFFFF',
        fontSecondary: '#CBC9C9',
    },
    displayContainer: {
        width: '100%',
        minHeight: '250px',
        border: '3px solid transparent',
        background:
            'linear-gradient(#313342, #313342) padding-box, linear-gradient(to right, #8A00F9 0%, #FD99FF 100%) border-box',
        borderRadius: '8px',
        marginBottom: '4em',
    },
    loginContainer: {
        minHeight: '250px',
        border: '3px solid #595959',
        backgroundColor: '#313342',
        borderRadius: '8px',
        marginBottom: '4em',
    },
    flexRow: {
        display: 'flex',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    primaryButton: {
        m: 4,
        padding: '0.5em 2em',
        fontSize: '1rem',
        fontWeight: 600,
        background: 'linear-gradient(to right, #8A00F9 0%, #FD99FF 100%)',
        alignSelf: 'center',
        borderRadius: '15px',
    },
    textField: {
        backgroundColor: '#595959',
        '& label': { color: '#FFFFFF' }, // we're not displaying label currently
        '& .MuiOutlinedInput-root': {
            color: '#FFFFFF',
            backgroundColor: 'transparent', // should technically be '#D5D5D7'
            '& fieldset': { borderColor: '#595959' },
            '&:hover fieldset': { borderColor: 'lightgray' },
            '&.Mui-focused fieldset': { borderColor: 'lightgray' },
        },
    },
};
