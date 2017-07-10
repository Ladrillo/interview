import React, { Component } from 'react';
import StyledButton from '../../styled/button';
import Heart from '../heart/Heart';
import './Card.css';


export default function Card({ id, name, image, birthday, homeworld, onEdit, isFav, onToggleFav }) {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='card-name'>
                    {name} { onToggleFav && <Heart on={isFav} toggle={() => onToggleFav(id)}/> }
                </div>
                <img src={`http://localhost:3008/${image}`} alt='profile' />
                <p>
                    <span>Birthday:</span>
                    <span>{birthday}</span>
                </p>
                {
                    homeworld &&
                    <p>
                        <span>Homeworld:</span>
                        <span>{homeworld}</span>
                    </p>
                }
            </div>
            {
                onEdit &&
                <div className='card-buttons'>
                    <StyledButton onClick={() => onEdit(id)}>edit</StyledButton>
                </div>
            }
        </div>
    );
}
