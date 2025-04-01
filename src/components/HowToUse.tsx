const instructions = [
    {
        title: '1. Enter your ideas with 5 prompts',
        info: 'Hover over the "?" icons for tips on providing the best information.',
    },
    {
        title: '2. Click Generate to preview your full prompt',
        info: 'Review the generated prompt and make any final edits before submitting.',
    },
    {
        title: '3. Submit and get your response',
        info: 'Sit back as Google Gemini generates a precise and customised response tailored to your input!',
    },
];

const HowToUse = () => {
    return (
        <>
            <h2>
                HOW TO USE <br /> 5TAR AI
            </h2>
            <div className="instructions-container">
                {instructions.map((instruction) => (
                    <div className="instructions-box">
                        <p className="instruction instruction-title">
                            {instruction.title}
                        </p>
                        <p className="instruction">{instruction.info}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HowToUse;
