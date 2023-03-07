import { Plus } from "lucide-react";
import { useState } from "react";

import '../assets/styles/components/todo.scss'
import { ITodo } from "../interfaces/ITodo";

export default ({ handleNewTodo}:{handleNewTodo: Function}) => {
  const [newTodo, setNewTodo] = useState<ITodo>({
    name: '',
    category: 'Work',
    isDone: false
  });

  const emptyTodo = () =>{
    setNewTodo({
      name: '',
      category: 'Work',
      isDone: false,
    })
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // vermijd dat de pagina herlaadt
    if(!newTodo.name || !newTodo.category) return; // TODO: error message

    handleNewTodo(newTodo); // we voeren code uit in App.tsx
    emptyTodo();
    
    console.log(newTodo)
  };

  return (
    <form onSubmit={addTodo} className="c-add-todo">
      <button className="c-add-todo__button js-add-todo__button">
        <Plus className="c-add-todo__icon" />
      </button>

      <div>
        <input
          value={newTodo.name}
          onInput={(e: React.FormEvent<HTMLInputElement>) => setNewTodo({ ...newTodo, name: e.currentTarget.value })}
          className="c-add-todo__input"
          type="text"
          placeholder="Add a new todo" />
        <select
          value={newTodo.category}
          onChange={(e: React.FormEvent<HTMLSelectElement>) => setNewTodo({ ...newTodo, category: e.currentTarget.value })}
          className="c-add-todo__select"
          name="category" id="category">
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
};
