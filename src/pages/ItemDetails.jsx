import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetails = ({ toDo }) => {
    const { id } = useParams();  
    const navigate = useNavigate();  

   
    const task = toDo.find((task) => task.id.toString() === id);


    if (!task) {
        return (
            <div>
                <p>Task not found</p>
                <button className="back-to-task-btn" onClick={() => navigate('/')}>Go back to tasks list</button>
            </div>
        );
    }

    return (
        <div className='project'>
             {task.title === "Read the project" && (
                <div>
                    <img 
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExejUzZHVkN28xOTdkajk0NjVsOTk0OXdzNWQ3bWljZjE1MTFsdmJsdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFA61GS9qKZ68/giphy.gif"  
                        alt="Task GIF"
                        style={{ maxWidth: '300px', height: 'auto'}} 
                    />
                </div>
            )}
            
            {task.title === "Create React to Do application" && (
                <div>
                    <img 
                        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N4MGw4ZDJidnJkdHQzcTV2Zng4cnFteGd5NWdrZjN4eWp0ajJwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/102h4wsmCG2s12/giphy.gif"  
                        alt="Create React Task GIF"
                        style={{ maxWidth: '300px', height: 'auto'}} 
                    />
                </div>
            )}
            <h2 className='details'>Task Details</h2>
            
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Status:</strong> {task.status ? 'Completed' : 'Pending'}</p>
            <p><strong>Description:</strong> {task.description || 'No description available'}</p>
           
            
            <button className="back-to-task-btn" onClick={() => navigate('/')}>Back to Task List</button>
        </div>
    );
}

export default ItemDetails