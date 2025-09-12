import {Counter} from "./Counter";

export function CounterGroup(props) {
    return <div>
        {
            new Array(props.counterSize).fill(1).map((value, index) => {
                return <Counter key={index}/>
            })
        }
    </div>;
}