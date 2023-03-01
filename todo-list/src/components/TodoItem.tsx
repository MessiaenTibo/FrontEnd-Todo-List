import '../assets/styles/components/todoItem.scss'
import { ITodo } from '../interfaces/ITodo'

export default ( { todo }: { todo: ITodo}) => {
    //TODO: I want props here
    // name, category, isDone, id
    
  return(
    <li className='c-todo-item'>
        <input type="checkbox" checked={todo.isDone} id={todo.name}/>
        <label>{todo.name}</label>
        <p>{todo.category}</p>
    </li>

  )
};
