import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddContact({ handleAdd }) {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleClick = (contact) => {
        handleAdd(contact)
        navigate('/')
    }
    return (<div>
        <h3>
            Add contact
        </h3>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>
            Email
        </label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <button onClick={()=>handleClick({name,email})}>
            Add contact
        </button>
        
  </div>);
}

export default AddContact;
