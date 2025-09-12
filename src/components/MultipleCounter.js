import {useContext, useState} from "react";
import {CounterGroup} from "./CounterGroup";
import {CounterGroupGenerator} from "./CounterGroupGenerator";
import {CounterContext} from "../App";

export function MultipleCounter() {
    const {state,dispatch} = useContext(CounterContext);
  //  const [countSize, setCounterSize] = useState(state.count);
    return <div>
        <CounterGroupGenerator counterSize={state.count}/>
        <CounterGroup counterSize={state.count}/>
    </div>;
}