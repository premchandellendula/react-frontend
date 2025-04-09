import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [id, setId] = useState(0)
  const [updatedText, setUpdatedText] = useState("")
  
  const handleAddTodo = () => {
    const newId = id + 1;
    const fullTodo = {
      id : newId,
      isEditing: false,
      todo: todo
    }
    setTodos([...todos, fullTodo])
    setId(newId)
    setTodo("")
  }

  const handleDeleteTodo = (idx) => {
    const newTodos = todos.filter(todo => todo.id !== idx)
    setTodos(newTodos)
    console.log(idx)
  }

  const handleUpdateTodo = (todoId) => {
    const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, todo: updatedText, isEditing: false } : todo)
    setTodos(updatedTodos)
    setUpdatedText("");
  }

  const handleToggleEdit = (todoId) => {
    const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, isEditing: !todo.isEditing} : todo)
    setTodos(updatedTodos)

    if (updatedText === "") {
      setUpdatedText(todos.find(todo => todo.id === todoId).todo);
    }
  }
  return (
    <>
      <div className='p-2'>
        <input className='border' value={todo} type="text" placeholder='Enter the Todo' onChange={(e) => {
          setTodo(e.target.value)
        }} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        {todos.map(todo => (
          <div key={todo.id} className='py-2 border border-red-500 flex'>

              {todo.isEditing ? (
                  <div>
                    <input
                      value={updatedText}
                      className='border'
                      type="text"
                      onChange={(e) => {
                        
                        setUpdatedText(e.target.value)
                        
                      }}
                    />
                  </div>
              ) : (
                <div>
                  {todo.todo}
                </div>
              )}
              <button onClick={() => handleDeleteTodo(todo.id)} className='bg-gray-400 cursor-pointer ml-4'>Delete</button>
              <button onClick={() => {
                if(todo.isEditing){
                  handleUpdateTodo(todo.id)
                }else{
                  handleToggleEdit(todo.id);
                }
                }} className='bg-gray-400 cursor-pointer ml-4'>{todo.isEditing ? 'Save' : 'Update'}</button>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default App
