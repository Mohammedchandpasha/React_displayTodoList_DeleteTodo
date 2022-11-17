// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list">
      <div className="item">
        <p>{title}</p>
        <button type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
