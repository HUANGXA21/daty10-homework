import {useState, useContext, useEffect} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {mockApi} from "../apis/mockApi";

export function AddTodo() {
    const [inputText, setInputText] = useState('');
    const {dispatch} = useContext(TodoContext);
    const handleAdd = () => {
        if (inputText.trim()) {
            mockApi.post("/todos", {text: inputText.trim(),done:false})
                .then(res=>res.data)
                .then(todo=>dispatch({type: "ADD_TODO",payload:todo}))
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