import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {useEffect, useReducer} from "react";
import {routes} from "./routes/Routes";
import {useTodoService} from "./useTodoService";

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {getTodo} = useTodoService()
    useEffect(()=>{
        getTodo().then(todos=>dispatch({type:"LOAD_TODOS",payload:todos}))
    },[dispatch])
    return (
        <div>
            <TodoContext value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext>
        </div>
    );
}

export default App;