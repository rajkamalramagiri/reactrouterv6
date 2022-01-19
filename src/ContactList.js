import React, { useState } from 'react';
import {Link} from 'react-router-dom'
function ContactList({contacts,handleDelete}) {
    

    return (<div>
        <div>
            {contacts.map((contact,i) =>
                
                <Link to={`/contact/${i}`} state={contact}>
                    <h4>{contact.name}<button onClick={() => handleDelete(contact.id)}>Delete</button></h4>
                </Link>
                )}
        </div>
        <Link to='/add'>
            <button>Add Contact</button>
        </Link>
        
    </div>);
}

export default ContactList;
