import {useContext} from "react";
import {CounterContext} from "../App";

export function CounterGroupGenerator(props) {
    const {state, dispatch} = useContext(CounterContext);

    function updateSize(event) {
        let number = parseInt(event.target.value);
        if (!Number.isNaN(number)) {
            dispatch({
                type: "UPDATE_SIZE",
                payload: {number: number}
            })
        }
    }

    function reset() {
        dispatch({
            type: "RESET"
        })
    }

    return <>
        <div>
            size :
            <input type={"number"} value={props.counterSize || 0} onChange={updateSize}/>
            <button onClick={reset}>Reset</button>
        </div>
    </>;
}