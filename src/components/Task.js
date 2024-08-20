import React from 'react';
import './Task.css';

const Task = ({ task, onDelete }) => {
    return (
        <div class="task-list-box">
    <ul class="task-list">
        <li class="task-item">
            <span>{task.text}</span>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
    </ul>
</div>
    );
};

export default Task;
