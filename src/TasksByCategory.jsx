import React from 'react';
import { useParams } from 'react-router-dom';

function TasksByCategory({ tasks, deleteTask, moveUp, moveDown }) {
    const { category } = useParams();
    const filteredTasks = category ? tasks.filter(task => task.category === category) : tasks;

    return (
        <ol>
            {filteredTasks.map((task, index) => (
                <li key={index}>
                    <span className='text'>{task.task}</span>
                    <button className='delete' onClick={() => deleteTask(index)}>Delete ❌</button>
                    <button className='move' onClick={() => moveUp(index)}>Move Up 👆</button>
                    <button className='move' onClick={() => moveDown(index)}>Move Down 👇</button>
                </li>
            ))}
        </ol>
    );
}

export default TasksByCategory;
