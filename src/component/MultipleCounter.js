import {Counter} from "./Counter";
import {useState} from "react";

function CounterGroupGenerator(props) {

    function updateSize(event) {
        let number = parseInt(event.target.value);
        if (!Number.isNaN(number)) {
            props.onUpdateSize(number);
        }
    }

    function reset(){
        props.onUpdateSize(0);
    }
    return <div>
        size :
        <input type={"number"} value={props.counterSize || 0} onChange={updateSize}/>
        <button onClick={reset}>Reset</button>
    </div>;
}

function CounterGroup(props) {
    return <div>
        {
            new Array(props.counterSize).fill(1).map((value, index) => {
                return <Counter key={index}/>
            })
        }
    </div>;
}

export function MultipleCounter() {
    const [countSize, setCounterSize] = useState(4)
    return <div>
        <CounterGroupGenerator counterSize={countSize} onUpdateSize={setCounterSize}/>
        <CounterGroup counterSize={countSize}/>
    </div>;
}