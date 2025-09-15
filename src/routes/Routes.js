import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {HomePage} from "../pages/HomePage";
import {TodoDetailPage} from "../pages/TodoDetailPage";

export const routes = createBrowserRouter([{
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