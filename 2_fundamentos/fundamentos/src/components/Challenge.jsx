const Challenge = () => {
    const value1 = 1;
    const value2 = 5;

    const handleSumValues = (a, b) => {
        console.log(a + b);
    }
    return (
        <>
            <p>First value: {value1}</p>
            <p>Second value: {value2}</p>
            <button onClick={() => handleSumValues(value1, value2)}>click to print on console the values sum</button>
        </>
    );
};

export default Challenge;