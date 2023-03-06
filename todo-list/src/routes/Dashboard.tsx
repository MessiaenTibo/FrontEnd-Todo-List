import { Link } from "react-router-dom"
import AddTodo from "../components/AddTodo"
import AppHeader from "../components/AppHeader"
import TodoItem from "../components/TodoItem"

export default () => {
    return(
        <main>
            <Link to="/settings">Settings</Link>
            <AppHeader />

            <AddTodo />

            <ul className="js-todo-list">
            <TodoItem name="water drinken" category="Personal" isDone={false}/>
            </ul>
        </main>
    )
}