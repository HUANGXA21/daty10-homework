import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";

export function TodoItem(props) {
    const {state, dispatch} = useContext(TodoContext)
    const {updateTodo} = useTodoService()
    function makeAsDone() {
        updateTodo(props.todo)
            .then(todo => dispatch({type: "UPDATE_TODO", payload: {id: props.todo.id}}))
    }

    return <>
        <div className={"todo-item"}>
    <span
        className={props.todo.done ? "todo-done" : ""}
        onClick={makeAsDone}>
      {props.todo.text}
    </span>
        </div>
        <Button type="text"><EditOutlined /></Button>
    </>
}