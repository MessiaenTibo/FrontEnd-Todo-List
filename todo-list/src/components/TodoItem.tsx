import '../assets/styles/components/todoItem.scss'

export default ( {name, category, isDone}:
  {name:string
  category:string
  isDone:boolean}) => {
    //TODO: I want props here
    // name, category, isDone, id
    
  return(
    <li className='c-todo-item'>
        <input type="checkbox" />
        <label>{name}</label>
        <p>{category}</p>
    </li>

  )
};
