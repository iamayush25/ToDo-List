import React, { useState } from 'react'
import './App.css'

function Main() {
    const [userData , setuserData]  = useState([])
    const getData = () => {
        
    }
  return (
    <>
        <div className='Main-Container'>
            <div className='title'>
                <h1>ToDo List</h1>
            </div>
            <div className='togo-body' >
                <div className='inputs'>
                <input type='text' placeholder='Add Name' value={userData} />
                <input type='text' placeholder='Add Contact' value={userData} />
                <input type='text' placeholder='Add City' value={userData} />
                <button onClick={getData} >Add</button>  
                </div>
                <div></div>  
            </div>

        </div>
    </>
  )
}

export default Main