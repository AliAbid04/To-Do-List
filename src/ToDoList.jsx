import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ToDoList({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('');
    const [category, setCategory] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '' && category !== '') {
            const task = { task: newTask, category: category };
            setTasks([...tasks, task]);
            setNewTask('');
            setCategory('');
        }
    }

    return (
        <div className='todolist'>
            <h1>To Do List</h1>
            <div>
                <input type='text' placeholder='Enter Tasks' value={newTask} onChange={handleInputChange} />
                <select value={category} onChange={handleCategoryChange}>
                    <option value=''>Select Category</option>
                    <option value='work'>Work</option>
                    <option value='home'>Home</option>
                    <option value='shopping'>Shopping</option>
                    <option value='health'>Health</option>
                    <option value='social'>Social</option>
                </select>
                <button className='Addbutton' onClick={addTask}>Add</button>
            </div>
            <nav>
                <NavLink exact to='/' activeClassName='active'>All</NavLink>
                <NavLink to='/category/work' activeClassName='active'>Work</NavLink>
                <NavLink to='/category/home' activeClassName='active'>Home</NavLink>
                <NavLink to='/category/shopping' activeClassName='active'>Shopping</NavLink>
                <NavLink to='/category/health' activeClassName='active'>Health</NavLink>
                <NavLink to='/category/social' activeClassName='active'>Social</NavLink>
            </nav>
        </div>
    );
}

export default ToDoList;
