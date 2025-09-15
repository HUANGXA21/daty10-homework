import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function AddTodo() {
    const [inputText, setInputText] = useState('');
    const {dispatch} = useContext(TodoContext);
    const {createTodo} = useTodoService()
    const handleAdd = () => {
        if (inputText.trim()) {
            createTodo(inputText).then(todo => dispatch({type: "ADD_TODO", payload: todo}))
            setInputText(''); // 清空输入框
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="输入新的todo..."
            />
            <button onClick={handleAdd}>add</button>
        </div>
    );
}