import { useState } from 'react'

export default () => {
    const [user, setUser] = useState('Marty')
    const [todoCount, setTodoCount] = useState(14)

    const printAmountTodos = () => {
        if (todoCount === 0) {
            return 'Good job, no todos!'
        } else if (todoCount === 1) {
            return 'You have 1 todo. Better start doing it!'
        }

        return `You have ${todoCount} todos. Keep up the good work!`
    }
        

  return (
    <header>
      <h1>Hello, {user}</h1>
      <p>{printAmountTodos()}</p>
    </header>
  );
};
