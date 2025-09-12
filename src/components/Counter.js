import {useContext, useState} from "react";
import {CounterContext} from "../App";

export function Counter() {
    //const {count} = useContext(CounterContext);
    const [num, setNum] = useState(5)

    function add() {
        setNum(num + 1)
    }

    function sub() {
        setNum(num - 1)
    }

    return<div>
            <button onClick={add}>+</button>
            {num}
            <button onClick={sub}>-</button>
        </div>;
}