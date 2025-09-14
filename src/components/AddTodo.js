import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function AddTodo() {
    const [inputText, setInputText] = useState('');
    const {dispatch} = useContext(TodoContext);

    const handleAdd = () => {
        if (inputText.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: {text: inputText}
            });
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