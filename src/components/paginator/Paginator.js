import React, { Component } from 'react';
import Styled from '../../styled/paginator';


export default function Paginator({ onPrev, onNext, lastPage, currentPage }) {
    return (
        <Styled className='paginator'>
            { currentPage > 1 && <div onClick={onPrev} className='paginator-button prev'>Prev</div> } 
            { currentPage < lastPage && <div onClick={onNext} className='paginator-button next'>Next</div> }
        </Styled>
    );
}
