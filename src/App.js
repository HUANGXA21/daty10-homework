import './App.css';
import {MultipleCounter} from "./components/MultipleCounter";
import {createContext, useReducer} from "react";

function counterReducer(state, action) {
    return state;
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
