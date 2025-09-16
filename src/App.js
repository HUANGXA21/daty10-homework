import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {useEffect, useReducer} from "react";
import {routes} from "./routes/Routes";
import {useTodoService} from "./useTodoService";
import {unstableSetRender} from 'antd';
import {createRoot} from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {getTodo} = useTodoService()
    useEffect(() => {
        getTodo().then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [dispatch])
    return (
        <div>
            <TodoContext value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext>
        </div>
    );
}

export default App;