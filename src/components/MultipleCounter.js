import {useState} from "react";
import {CounterGroup} from "./CounterGroup";
import {CounterGroupGenerator} from "./CounterGroupGenerator";

export function MultipleCounter() {
    const [countSize, setCounterSize] = useState(4)
    return <div>
        <CounterGroupGenerator counterSize={countSize} onUpdateSize={setCounterSize}/>
        <CounterGroup counterSize={countSize}/>
    </div>;
}