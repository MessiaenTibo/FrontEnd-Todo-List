import { Plus } from "lucide-react";

import '../assets/styles/components/todo.scss'

export default () => {
  return (
    <form>
      <button>
        <Plus />
      </button>

      <input type="text" placeholder="Add a new todo" />
      <select name="category" id="category">
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
    </form>
  );
};
