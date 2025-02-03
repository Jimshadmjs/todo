import React, { useState } from 'react'
import tick from '../assets/tick.jpg'
import delete_icon from '../assets/delete.png'
import { FaEdit, FaTrash } from 'react-icons/fa';

function TodoItems({ id, text , isComplete , deleteTodo ,toggle ,  editTodoText}) {
    const [checked, setChecked] = useState(false);
    const [newText, setNewText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = () => {
      setChecked(!isComplete);  
    };

    const handleEditClick = () => {
      setIsEditing(true); 
    };
    

    const handleSaveEdit = () => {
      editTodoText(id, newText);
      setIsEditing(false); 
    };
    
    const handleCancelEdit = () => {
      setIsEditing(false); 
      setNewText(text); 
    };

  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
        {/* <img className='w-7' src={isComplete ? tick : null} alt="" /> */}
        <input
        type="checkbox"
        checked={isComplete}
        onChange={handleChange}
        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
         {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}  
                        className="text-slate-700 ml-4 text-[17px] bg-gray-200 p-2 rounded"
                    />
                ) : (
                    <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''}`}>
                        {text}
                    </p>
                )}
      </div>
      {isEditing ? (
                <div>
                    <button onClick={handleSaveEdit} className="text-green-500">Save</button>
                    <button onClick={handleCancelEdit} className="text-red-500">Cancel</button>
                </div>
            ) : (
                <FaEdit onClick={handleEditClick} className="h-5 w-5 cursor-pointer" />
            )}
      <FaTrash onClick={()=> deleteTodo(id )} className="h-4 w-4"/>
        
        {/* <img src={delete_icon} onClick={()=> deleteTodo(id )} className='w-9 cursor-pointer' alt="" /> */}

    </div>
  )
}

export default TodoItems
