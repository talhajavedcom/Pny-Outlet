import React, { useState } from 'react'


const Todo = () => {
    const [activity, setActivity] =useState('')
    const [list, setList]=useState([]);
    const handlerinput = (e) => {
        setActivity(e.target.value);
    }

    const activityhandler = () => {
        setList([...list, activity]);
        console.log(list)
    }
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" placeholder='Add Activity' onChange={handlerinput} value={activity} />
      <button onClick={activityhandler} >Add Activity</button>
    </div>
  )
}

export default Todo
