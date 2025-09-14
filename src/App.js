import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoGroup} from "./components/TodoGroup";
import {TodoContext} from "./contexts/TodoContext";
import {AddTodo} from "./components/AddTodo";

export const initState = [

    {id: 1, text: "the first todo", done: false},

    {id: 2, text: "the second todo", done: true},

];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext value={{state, dispatch}}>
                <TodoGroup/>
                <AddTodo/>
            </TodoContext>
        </div>
    );
}

export default App;