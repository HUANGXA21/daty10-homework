import {useContext, useEffect, useState} from "react";
import {Input} from "antd";
import {Modal, Button} from "antd";
import {EditOutlined} from "@ant-design/icons";

import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function TodoItem(props) {
    const {state, dispatch} = useContext(TodoContext);
    const {updateTodo, updateTextTodo} = useTodoService();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editText, setEditText] = useState(props.todo.text);

    function makeAsDone() {
        updateTodo(props.todo)
            .then(todo => dispatch({type: "UPDATE_TODO", payload: {id: props.todo.id}}))
    }

    const showModal = () => {
        setIsModalVisible(true);
        setEditText(props.todo.text);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = () => {
        if (editText.trim() !== props.todo.text.trim()) {
            updateTextTodo({id: props.todo.id, text: editText})
                .then(todo => dispatch({type: "UPDATE_TEXT_TODO", payload: {id: props.todo.id, text: editText}}))
            setIsModalVisible(false);
        } else {
            setIsModalVisible(false);
        }
    };

    return (
        <>
            <div className={"todo-item"}>
                <span
                    className={props.todo.done ? "todo-done" : ""}
                    onClick={makeAsDone}
                >
                    {props.todo.text}
                </span>
            </div>
            <Button type="text" onClick={showModal}>
                <EditOutlined/>
            </Button>
            <Modal
                title="update"
                open={isModalVisible}
                onOk={handleSave}
                onCancel={handleCancel}
                okText="save"
                cancelText="cancel"
            >
                <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="please update Todo"
                />
            </Modal>
        </>
    );
}
