import { Check } from 'lucide-react';
import '../assets/styles/components/todoItem.scss'
import { ITodo } from '../interfaces/ITodo';

//TODO: add custom checkboc! CSS only
//TODO: add styling

export default ( {todo}:{todo: ITodo}) => {
    //TODO: I want props here
    // name, category, isDone, id
    
  return(
    <li className='flex items-center gap-4'>
        <input className='sr-only peer' id={todo.name} type="checkbox" />

        <span className={`shrink-0 flex justify-center rounded-full items-center w-12 h-12 bg-neutral-100 border-2
        border-blue-600 ${todo.isDone ? 'bg-blue-600 text-white' : 'text-blue-600'}`}>
          <Check className=" stroke-current "/>
        </span>


        <label
        className='text-xl font-semibold'
        htmlFor={todo.name}>{todo.name}</label>

        <p className='text-neutral-400'>{todo.category}</p>
    </li>

  )
};
