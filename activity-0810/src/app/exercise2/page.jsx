"use client";

import { useState, useEffect } from "react";
import { ListGroup } from 'react-bootstrap';

export default function Exercise2(){
    const URL = 'https://jsonplaceholder.typicode.com/users';
    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log(error))
    }, [])

    return(
    <ListGroup>
        {user.map((item, index) => 
            <ListGroup.Item key={item.id}>
                <h1>{item.name}</h1>
                <h2>Información general</h2>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                <p>{item.website}</p>
                <h2>Dirección</h2>
                <p>{item.address.street}</p>
                <p>{item.address.suite}</p>
                <p>{item.address.city}</p>
                <p>{item.address.zipcode}</p>
                <p>{item.address.geo.lat}</p>
                <p>{item.address.geo.lng}</p>
                <h2>Empresa</h2>
                <p>{item.company.name}</p>
                <p>{item.company.catchPhrase}</p>
                <p>{item.company.bs}</p>
            </ListGroup.Item>
        )}
    </ListGroup>
    );
}