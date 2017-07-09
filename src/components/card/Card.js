import React, { Component } from 'react';
import './Card.css';


export default function Card({ id, name, image, birthday, homeworld, onEdit }) {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='card-name'>{name}</div>
                <img src={`http://localhost:3008/${image}`} alt='profile' />
                <p>
                    <span>Birthday:</span>
                    <span>{birthday}</span>
                </p>
                <p>
                    <span>Homeworld:</span>
                    <span>{homeworld}</span>
                </p>
            </div>
            <div onClick={() => onEdit(id)}>edit</div>
        </div>
    );
}
