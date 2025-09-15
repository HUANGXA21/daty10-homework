import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {useReducer} from "react";
import {routes} from "./routes/Routes";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: false},
];


function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext>
        </div>
    );
}

export default App;