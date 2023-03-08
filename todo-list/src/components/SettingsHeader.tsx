import { Home } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

import '../assets/styles/components/header.scss'
import Dashboard from '../routes/Dashboard';

export default () => {
    const [user, setUser] = useState('Marty')
    const [todoCount, setTodoCount] = useState(3)

    const printAmountTodos = () => {
        if (todoCount === 0) {
            return 'Good job, no todos!'
        } else if (todoCount === 1) {
            return 'You have 1 todo. Better start doing it!'
        } else if (todoCount > 100) {
            return `You have ${todoCount} todos, that's a lot of todos!`
        }

        return `You have ${todoCount} todos. Keep up the good work!`
    }
        

  return (
    <header className="flex items-center justify-between py-12">
      <div>
        <h1 className='text-xl font-semibold'>Settings</h1>
      </div>
      <Link className='rounded-full bg-neutral-100 p-4 text-neutral-300 hover:text-neutral-600 focus:outline-none
      focus-visible:ring focus-visible:text-neutral-600'
      to={'/'}><Home /></Link>
    </header>
  );
};

