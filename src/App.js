import './App.css';
import {MultipleCounter} from "./components/MultipleCounter";
import {createContext} from "react";


export const CounterContext = createContext();
export const initState = {count: 8}

function App() {

    return (
        <div className="App">
            <CounterContext.Provider value={initState}>
                <MultipleCounter/>
            </CounterContext.Provider>
        </div>
    );
}

export default App;
