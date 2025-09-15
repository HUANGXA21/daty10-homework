import {Component} from "react";
import {TodoGroup} from "./TodoGroup";
import {AddTodo} from "./AddTodo";

export class TodoList extends Component {
    render() {
        return <>
            <h2 className={"todo-h2"}>Todo List</h2>
            <TodoGroup/>
            <AddTodo/>
        </>;
    }
}