import AddTodo from "./components/AddTodo";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="o-container">
      <AppHeader />

      <AddTodo />

      <ul className="js-todo-list">
        <TodoItem name="water drinken" category="Personal" isDone={false}/>
      </ul>

      <AppFooter />
    </div>
  );
}

export default App;
