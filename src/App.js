import './App.css';
import {MultipleCounter} from "./components/MultipleCounter";
import {createContext, useReducer} from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case "UPDATE_SIZE":
            return {count: action.payload.number}
        case "RESET":
            return {count: 0}
        default:
            return state;
    }

}


export const CounterContext = createContext();
export const initState = {count: 8}

function App() {
    const [state, dispatch] = useReducer(counterReducer, initState);
    let value = {
        state: state,
        dispatch: dispatch
    }
    return (
        <div className="App">
            <CounterContext.Provider value={value}>
                <MultipleCounter/>
            </CounterContext.Provider>
        </div>
    );
}

export default App;
