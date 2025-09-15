import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {useEffect, useReducer} from "react";
import {routes} from "./routes/Routes";
import {mockApi} from "./apis/mockApi";

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(()=>{
        mockApi.get("/todos")
            .then(response=>response.data)
            .then(todos=>dispatch({type:"LOAD_TODOS",payload:todos}))
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