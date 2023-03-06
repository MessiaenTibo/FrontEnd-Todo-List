import { useState } from "react"

import { ITodo } from "../interfaces/ITodo"

import { Link } from "react-router-dom"
import AddTodo from "../components/AddTodo"
import AppHeader from "../components/AppHeader"
import TodoItem from "../components/TodoItem"

export default () => {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: '1', name: "Learn React", category: "work", isDone: true },
        { id: '2', name: "Learn TypeScript", category: "work", isDone: false },
        { id: '3', name: "Learn GraphQL", category: "work", isDone: false },
      ]);

    const addNewTodo = (t: ITodo) => {
        setTodos([t, ...todos]);
      }
    return(
        <main>
            <Link to="/settings">Settings</Link>
            <AppHeader />

            <AddTodo handleNewTodo={addNewTodo}/>

            <ul className="js-todo-list">
            <TodoItem name="water drinken" category="Personal" isDone={false}/>
            </ul>
        </main>
    )
}