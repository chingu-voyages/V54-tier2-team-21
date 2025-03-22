interface ResultProps {
    result: string;
}
const Result = ({ result }: ResultProps) => {
    return <p>{result}</p>;
};

export default Result;
