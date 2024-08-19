import React from 'react';
import './Task.css';

const Task = ({ task, onDelete }) => {
    return (
        <div>
            <span>{task.text}</span>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
};

export default Task;
