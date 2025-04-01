const Hero = () => {
    return (
        <>
            <img
                src="../../public/logo.gif"
                alt="Image of pentagram"
                height={200}
            />
            <h2 className="title">
                Better Prompts <br /> For Better <span className="ai">AI</span>
            </h2>
            <p className="description">
                With our start prompt builder, optimize your AI interactions by
                crafting precise, customized instructions for Google Gemini.
            </p>
            <p className="tagline">
                <span className="five-stars">Five Stars</span> Prompting, <br />{' '}
                One Powerful AI Result
            </p>
        </>
    );
};

export default Hero;
