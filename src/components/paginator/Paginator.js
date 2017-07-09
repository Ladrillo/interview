import React, { Component } from 'react';
import Styled from '../../styled/paginator';


// TO-DO: make it smarter so it knows when to disable the buttons
export default function Paginator({ onPrev, onNext }) {
    return (
        <Styled className='paginator'>
            <div onClick={onPrev} className='paginator-button prev'>Prev</div>
            <div onClick={onNext} className='paginator-button next'>Next</div>
        </Styled>
    );
}
