import { useEffect, useState } from "react"

import useLocalStorage from "../hooks/useLocalStorage"

import { Link } from "react-router-dom"
import AddTodo from "../components/AddTodo"
import AppHeader from "../components/AppHeader"
import TodoItem from "../components/TodoItem"
import { ITodo } from "../interfaces/ITodo"

export default () => {
    const {get, set} = useLocalStorage()

    const [todos, setTodos] = useState<ITodo[]>(get())

    useEffect(() => {
        set(todos.filter((t: ITodo) => !t.isDone))
    }, [todos])

    // const [todos, setTodos] = useState<ITodo[]>([
    //     { id: '1', name: "Learn React", category: "work", isDone: true },
    //     { id: '2', name: "Learn TypeScript", category: "work", isDone: false },
    //     { id: '3', name: "Learn GraphQL", category: "work", isDone: false },
    //   ]);

    const addNewTodo = (t: ITodo) => {
        setTodos([t, ...todos]);
    }
    
    const toggleTodo = (todo: ITodo) => {
        setTodos((currentTodos: ITodo[]) =>
            currentTodos.map((t: ITodo) => {
            if(t.id === todo.id) return {...t, isDone: !t.isDone}
                return t;
            }),
        )
    }

    //TODO: after 3s the todo should be romoved from the list
    //TODO: keep track of the todos in local storage ???
    //TODO: settings page
    const removeTodo = (todo: ITodo) => {
        setTodos((currentTodos: ITodo[]) =>
            currentTodos.filter((t: ITodo) => t.id !== todo.id),
        )
    }

    return(
        <main>
            <AppHeader todoCount={todos.length}/>

            <AddTodo handleNewTodo={addNewTodo}/>

            <ul className="flex flex-col gap-y-4">
                {todos.map((todo: ITodo) => (
                    <TodoItem todo={todo} key={todo.id} toggle={toggleTodo} remove={removeTodo}/>
                ))}
            </ul>
        </main>
    )
}