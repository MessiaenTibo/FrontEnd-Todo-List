import { useState } from 'react'

import '../assets/styles/components/header.scss'

export default () => {
    const [user, setUser] = useState('Marty')
    const [todoCount, setTodoCount] = useState(14)

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
    <header className="c-header">
      <h1 className='c-header__title'>Hello, {user}</h1>
      <p className='c-header__subtitle'>{printAmountTodos()}</p>
    </header>
  );
};

