import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {Button} from 'antd';
export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const {deleteTodo} = useTodoService();
    const handleDelete = (id) => {
        deleteTodo(id).then(todo => dispatch({type: "DELETE_TODO", payload: {id: id}}))
    };

    return <div>
        {state.length === 0 && (
            <p className="todo-hint">Add the things you need to do today...</p>
        )}
        {
            state.map((item, index) => {
                return <div className="todo-item-container">
                    <TodoItem todo={item} key={index} index={index}/>
                    <Button type="primary" danger  onClick={() => handleDelete(item.id)}>X</Button>
                    <Button type="primary" onClick={() => navigate(`/todos/${item.id}`)}>detail</Button>
                </div>
            })
        }
    </div>
}