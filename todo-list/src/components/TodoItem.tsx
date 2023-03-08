import { Check } from 'lucide-react';
import { useState } from 'react';
import '../assets/styles/components/todoItem.scss'
import { ITodo } from '../interfaces/ITodo';

//TODO: add custom checkboc! CSS only
//TODO: add styling

export default ( {todo, toggle, remove}:{todo: ITodo, toggle: Function, remove: Function}) => {
  //TODO: when you click a todo, it should be marked as done
const [timeOutId, setTimeoutId] = useState<number | undefined>();

  const handleToggle = () => {
    if(timeOutId) clearTimeout(timeOutId);

    toggle(todo);

    if(!todo.isDone){
      const id = setTimeout(() => {
        console.log('todo removed')
        remove(todo)
        setTimeoutId(undefined); // Better safe than sorry
      }, 3000);
  
      setTimeoutId(id);
    }
  }
    
  return(
    <li>
        <input className='sr-only peer' id={todo.id} type="checkbox" defaultChecked={todo.isDone}
        onChange={handleToggle}/>

        <label className='flex items-center transition-opacity duration-200 gap-4 peer-checked:opacity-30' htmlFor={todo.id}>
          <span className={`shrink-0 flex justify-center rounded-full items-center w-12 h-12 bg-neutral-100 border-2
          border-blue-600 ${todo.isDone ? 'bg-blue-500 text-white' : 'text-blue-600'}`}>
            <Check className=" stroke-current "/>
          </span>

          <div>
            <p className='text-xl- font-semibold'>{todo.name}</p>
            <p className='text-neutral-400'>{todo.category}</p>
          </div>
        </label>
    </li>

  )
};
