function Testing() {

    const [st2, setst2] = useState(0);

    function add() {
        let currentCount = st2;
        currentCount++;
        setst2(currentCount);

    }

    function subtract() {
        let currentCount = st2;
        currentCount--;
        setst2(currentCount);

    }
    const red = {
        color: 'red',
    }
    const green = {
        color: 'green',
    }
    return (
        <>
            <section>
                <h2>Task 2</h2>
                <button style={red} onClick={add}>add</button>
                <button style={green} onClick={subtract}>remove</button>
                <div>{st2}</div>
            </section>
        </>
    );
}

export default Testing
