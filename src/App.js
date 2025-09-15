import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";
import {createBrowserRouter,Outlet, NavLink, RouterProvider} from "react-router";
import {useReducer} from "react";

export const initState = [];

const routes = createBrowserRouter([{
    path: "/",
    element: <DefaultLayout/>,
    children: [
        {
            path: "/",
            element: <TodoList />
        }
    ]
}])

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </header>
    </div>
}

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