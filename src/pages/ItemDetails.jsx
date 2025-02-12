import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetails = ({ toDo }) => {
    const { id } = useParams();  
    const navigate = useNavigate();  

   
    const task = toDo.find((task) => task.id === id);

    if (!task) {
        return (
            <div>
                <p>Task not found</p>
                <button onClick={() => navigate('/')}>Go back to tasks list</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Task Details</h2>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Status:</strong> {task.status ? 'Completed' : 'Pending'}</p>
            <p><strong>Description:</strong> {task.description || 'No description available'}</p>
            
            <button onClick={() => navigate('/')}>Back to Task List</button>
        </div>
    );
}

export default ItemDetails;

