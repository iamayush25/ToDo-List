import React from 'react';
import './App.css';

function Data({ AllData, deleteItem, id, editPrompt }) {
  return (
    <>
      <li className='todo-list'>
        <table>
          <tbody>
            <tr>
              <td>{AllData.name}</td>
              <td>{AllData.contact}</td>
              <td>{AllData.city}</td>
            </tr>
            <button className='Edit-button' onClick={() => editPrompt(id)}>
            <img src={require('./Image/Edit-button.png')} alt="Edit Button" />
          </button>
          <button className='Delete-button' onClick={() => deleteItem(id)}>
            <img src={require('./Image/delete-button.png')} alt="Delete Button" />
          </button>
          </tbody>
        </table>
        {/* <div>
          <button className='Edit-button' onClick={() => editPrompt(id)}>
            <img src={require('./Image/Edit-button.png')} alt="Edit Button" />
          </button>
          <button className='Delete-button' onClick={() => deleteItem(id)}>
            <img src={require('./Image/delete-button.png')} alt="Delete Button" />
          </button>
        </div> */}
      </li>
    </>
  );
}

export default Data;
