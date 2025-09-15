import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: {id: id},
        });
    };

    return <div>
        {state.length === 0 && (
            <p className="todo-hint">Add the things you need to do today...</p>
        )}
        {
            state.map((item, index) => {
                return <div className="todo-item-container">
                    <TodoItem todo={item} key={index} index={index}/>
                    <button onClick={() => handleDelete(item.id)}>X</button>
                    <button onClick={() => navigate(`/todos/${item.id}`)}>detail</button>
                </div>
            })
        }
    </div>
}