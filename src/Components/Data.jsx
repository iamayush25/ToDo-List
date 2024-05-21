import React from 'react'
import './App.css';

function Data({AllData , deleteItem , id , editItemPrompt} ) {

  return (
    <>
      <li className='todo-list'>
        {AllData}
        <div>
          <button className='Edit-button'><img src={require('./Image/Edit-button.png')} alt="Edit Button" 
          onClick={() => editItemPrompt(id)} /></button>
          <button className='Delete-button'><img src={require('./Image/delete-button.png')} alt="Delete Button" onClick={() => deleteItem(id)} /></button>
        </div>
      </li>

    </>
  )
}

export default Data;