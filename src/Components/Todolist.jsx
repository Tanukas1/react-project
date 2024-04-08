import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  

  return (

    <div className='container p-5'>
        <div className='card p-5 shadow'>
            <div>
                <h1 className='text-center'>Todo List</h1>
                    <div>
                        <div className='row'>
                            <div className='col'>
                                <input type="text" class="form-control" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder='Enter a new task' ></input>
                            </div>
                            <div className='col'>
                                <button type="button" class="btn btn-success w-25" onClick={addTask}>Add Task</button>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {tasks.map(task => (
                            <li key={task.id}>
                               
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                                </span>
                                <button  type="button" class="btn btn-danger" onClick={() => removeTask(task.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    </div>
  );
};

export default TodoList;
