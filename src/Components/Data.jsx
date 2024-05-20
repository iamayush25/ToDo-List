import React from 'react'
import './App.css';

function Data({AllData}) {

  return (
    <>
      <li className='todo-list'>
        {AllData}
        <div>
          <button className='Delete-button'><img src={require('./Image/Edit-button.png')} alt="" /></button>
          <button className='Delete-button'><img src={require('./Image/delete-button.png')} alt="" /></button>
        </div>
      </li>

    </>
  )
}

export default Data;