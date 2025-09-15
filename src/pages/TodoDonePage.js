import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDonePage() {
    const {state, dispatch} = useContext(TodoContext);
    const doneTodos = state.filter(todo => todo.done === true);
    return <div className={"todos-done"}>
        <h1>Todo Done</h1>
        {doneTodos.length === 0 ? (
            <p>No completed todos yet</p>
        ) : (
            <ul className={"todo-list"}>
                {doneTodos.map((todo, index) => (
                    <TodoItem todo={todo} index={todo.id}></TodoItem>
                ))}
            </ul>
        )}
    </div>
}