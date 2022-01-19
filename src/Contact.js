import React from 'react';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLocation, NavLink } from "react-router-dom";

function Contact(props) {

    let params = useParams();
    let location = useLocation();
    console.log(location)

    return <div>
        <h2>
        contact Information
        </h2>
        <h4>Name is {props.contacts[params.id].name}</h4>
        <h4>Email is {props.contacts[params.id].email}</h4>
        <Link to='/'>
        <button>Home</button>
        </Link>
    </div>;
}

export default Contact;
