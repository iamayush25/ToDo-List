import React, { useState } from 'react';
import './App.css';
import Data from './Data';

function Main() {
    const [itemName, setItemName] = useState('');
    const [contact, setContact] = useState('');
    const [cityName, setCityName] = useState('');
    const [userList, setUserList] = useState([]);

    const getData = () => {
        if (itemName.trim() === '' || contact.trim() === '' || cityName.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        setUserList(prevData => [
            ...prevData,
            {
                name: itemName,
                contact: contact,
                city: cityName
            }
        ]);

        setItemName('');
        setContact('');
        setCityName('');
    };

    const deleteData = (index) => {
        setUserList(prevData => prevData.filter((_, i) => i !== index));
    };

    const editData = (index) => {
        const newName = prompt("Edit name:", userList[index].name);
        const newContact = prompt("Edit contact:", userList[index].contact);
        const newCity = prompt("Edit city:", userList[index].city);

        if (newName && newContact && newCity) {
            const updatedList = [...userList];
            updatedList[index] = { name: newName, contact: newContact, city: newCity };
            setUserList(updatedList);
        }
    };

    return (
        <div className='Main-Container'>
            <div className='title'>
                <h1>ToDo List</h1>
            </div>
            <div className='todo-body'>
                <div className='inputs'>
                    <input type='text' placeholder='Add Name' value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    <input type='text' placeholder='Add Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                    <input type='text' placeholder='Add City' value={cityName} onChange={(e) => setCityName(e.target.value)} />
                    <button onClick={getData}>Add</button>
                </div>
                <ul className='todo-item'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>City</th>
                            </tr>
                        </thead>
                    </table>
                    {userList.map((item, index) => (
                        <Data
                            key={index}
                            AllData={item}
                            deleteItem={() => deleteData(index)}
                            editPrompt={() => editData(index)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Main;
