import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {

    const {id} = useParams ();

    return ( 
        
        <div>
            <h2>Tasks Details</h2>
            <p>Details of an item selected from {id}</p>
            
        </div>
     );
}
 
export default ItemDetails;