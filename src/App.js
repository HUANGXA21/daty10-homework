import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {useReducer} from "react";
import {HomePage} from "./pages/HomePage";
import {TodoDetailPage} from "./pages/TodoDetailPage";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: false},
];

const routes = createBrowserRouter([{
    path: "/",
    element: <DefaultLayout/>,
    children: [
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path:"todos/:id",
            element:<TodoDetailPage/>
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