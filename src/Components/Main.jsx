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

    const deleteData = (id) => {
        console.log('item deleted');
        setuserList((previousData) => {
            return previousData.filter((ArrayElements, index) => {
                return index !== id
            })
        })
    }

    const editItemPrompt = (id) => {
        const newName = prompt('Enter the new name:');
        if (newName) {
            const index = userList.findIndex(userList => userList.id === id);
            if (index !== -1) {
                const newItems = [...userList];
                newItems[index] = { ...setuserList[index], name: newName };
                setuserList(newItems);
            }
        }
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
                        {userList.map((FinalData, index) => {
                            return <Data id={index} key={index}    // props
                                deleteItem={deleteData}           // props
                                editItemPrompt = {editItemPrompt}  // props
                                AllData={FinalData} />           // props
                        })}

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Main