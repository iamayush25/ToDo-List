import React, { useState } from 'react'
import './App.css'
import Data from './Data'

function Main() {
    const [ListItem, setListItem] = useState('')
    const [userList, setuserList] = useState([])
    const getData = () => {
        setuserList((previousData) => {
            return [...previousData, ListItem]
        })
        setListItem("")

    }

    const ItemsEvent = (event) => {
        setListItem(event.target.value)
    }
    return (
        <>
            <div className='Main-Container'>
                <div className='title'>
                    <h1>ToDo List</h1>
                </div>
                <div className='todo-body' >
                    <div className='inputs'>
                        <input type='text' placeholder='Add Name' value={ListItem} onChange={ItemsEvent} />
                        <button onClick={getData} >Add</button>
                    </div>
                    <ul className='todo-item'>
                        {userList.map((FinalData) => {
                            return <Data AllData = {FinalData}/>
                        })}

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Main