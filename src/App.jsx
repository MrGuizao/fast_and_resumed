import { useState, useEffect } from 'react'

const App = () => {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [isClicked, setIsClicked] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, { id: crypto.randomUUID(), task }])
    setTask('')
  }

  const handleChange = e => setTask(e.target.value);
  const handleClick = id => setIsClicked(id);
  const deleteTask = id => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button>add</button>
      </form>
      <ul>
        {
          todos.map(todo => {
            return (
              <div
                key={todo.id}
                style={isClicked === todo.id ? { color: 'red' } : null}>
                <li onClick={() => handleClick(todo.id)}
                >{todo.task}</li>
                <span onClick={() => deleteTask(todo.id)}>X</span>
              </div>
            )
          }
          )
        }
      </ul>
    </>
  )
}

export default App;