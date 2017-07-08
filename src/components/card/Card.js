import React, { Component } from 'react';
import './Card.css';


export default function Card({ name, image, birthday, homeworld }) {
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
        </div>
    );
}
