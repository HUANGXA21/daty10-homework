import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)

    return <div>
        {state.length === 0 && (
            <p className="todo-hint">Add the things you need to do today...</p>
        )}
        {
            state.map((item, index) => {
                return <div>
                    <TodoItem todo={item} key={index} index={index}/>
                    <button>X</button>
                </div>
            })
        }
    </div>
}