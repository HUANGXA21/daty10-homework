import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {updateTodo} from "../request/updateTodo";

export function TodoItem(props) {
    const {state, dispatch} = useContext(TodoContext)

    function makeAsDone() {
        updateTodo(props.todo)
            .then(todo => dispatch({type: "UPDATE_TODO", payload: {id: props.todo.id}}))
    }

    return <div className={"todo-item"}>
    <span
        className={props.todo.done ? "todo-done" : ""}
        onClick={makeAsDone}
    >
      {props.todo.text}
    </span>
    </div>
}