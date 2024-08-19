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
            const response = await axios.get('https://to-do-backend-yuvanidhi-ss-projects.vercel.app/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    const addTask = async (text) => {
        try {
            await axios.post('https://to-do-backend-yuvanidhi-ss-projects.vercel.app/tasks', { text });
            fetchTasks(); // Refresh task list after adding
        } catch (error) {
            console.error('Error adding task', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`https://to-do-backend-yuvanidhi-ss-projects.vercel.app/tasks/${id}`);
            fetchTasks(); // Refresh task list after deletion
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <div className="task-list-container">
            <h1>Task List</h1>
            <TaskForm onAddTask={addTask} />
            <div className="task-list-box">
                <div className="task-list">
                    {tasks.map((task) => (
                        <Task key={task._id} task={task} onDelete={deleteTask} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskList;
