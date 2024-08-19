import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import axios from 'axios';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    const addTask = async (text) => {
        try {
            await axios.post('http://localhost:5000/tasks', { text });
            fetchTasks(); // Refresh task list after adding
        } catch (error) {
            console.error('Error adding task', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`);
            fetchTasks(); // Refresh task list after deletion
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <TaskForm onAddTask={addTask} />
            <div>
                {tasks.map((task) => (
                    <Task key={task._id} task={task} onDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
