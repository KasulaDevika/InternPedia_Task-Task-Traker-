import { useState } from 'react'
import './App.css'

const App = () => {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState([])
  const handleChange = (e) => {
    setTaskName(e.target.value)
  }
  const handleAddNewTask = () => {
    if (taskName && !tasks.includes(taskName.toLowerCase())) {

      let newData = [...tasks]
      let newObject = { title: taskName.toLowerCase(), id: tasks.length + 1 }
      newData.unshift(newObject)
      setTasks(newData)
      setTaskName('')
    }
    else {
      alert('please type something different or do not leavy empty')
      setTaskName('')
    }
  }
  const removeTask = (id) => {
    const newData = tasks.filter(taskObject => taskObject.id !== id)
    setTasks(newData)
  }
  return (
    <div className='container'>
      <h1>Task Tracker</h1>
      <div className='row-border'>
        <div className='col offset-3'>
          <input value={taskName} type='text' onChange={handleChange} />
          <button onClick={handleAddNewTask}>add task</button>
        </div>
      </div>
      <div className='row'>
        <div className='col offset-3'>
          {
            tasks.map(task => {
              return (

                <div className='d-flex' key={task.id}>
                  <p styles={{ marginRight: '20px' }}>{task.title}</p>
                  <input style={{ marginTop: "5px" }} type='checkbox' />
                  <button style={{ marginLeft: '20px' }} onClick={() => removeTask(task.id)}>remove</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
