export function CounterGroupGenerator(props) {

    function updateSize(event) {
        let number = parseInt(event.target.value);
        if (!Number.isNaN(number)) {
            props.onUpdateSize(number);
        }
    }

    function reset() {
        props.onUpdateSize(0);
    }

    return <>
        <div>
            size :
            <input type={"number"} value={props.counterSize || 0} onChange={updateSize}/>
            <button onClick={reset}>Reset</button>
        </div>
    </>;
}