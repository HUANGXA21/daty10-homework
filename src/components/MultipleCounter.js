import {useContext, useState} from "react";
import {CounterGroup} from "./CounterGroup";
import {CounterGroupGenerator} from "./CounterGroupGenerator";
import {CounterContext} from "../App";

export function MultipleCounter() {
    const {count} = useContext(CounterContext);
    const [countSize, setCounterSize] = useState(count);
    return <div>
        <CounterGroupGenerator counterSize={countSize} onUpdateSize={setCounterSize}/>
        <CounterGroup counterSize={countSize}/>
    </div>;
}