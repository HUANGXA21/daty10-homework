import {useContext, useState} from "react";
import {CounterGroup} from "./CounterGroup";
import {CounterGroupGenerator} from "./CounterGroupGenerator";
import {CounterContext} from "../App";

export function MultipleCounter() {
    const {state,dispatch} = useContext(CounterContext);
    const [countSize, setCounterSize] = useState(state.count);
    return <div>
        <CounterGroupGenerator counterSize={countSize} onUpdateSize={setCounterSize}/>
        <CounterGroup counterSize={countSize}/>
    </div>;
}