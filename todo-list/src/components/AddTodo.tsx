import { Plus } from "lucide-react";

import '../assets/styles/components/todo.scss'

export default () => {
  return (
    <form className="c-add-todo">
      <button className="c-add-todo__button">
        <Plus className="c-add-todo__icon" />
      </button>

      <div>
        <input className="c-add-todo__input" type="text" placeholder="Add a new todo" />
        <select className="c-add-todo__select" name="category" id="category">
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
};
