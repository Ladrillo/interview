import React, { Component } from 'react';
import styled from 'styled-components';


export default function Paginator({ upperLimit, onPrev, onNext, currentPage }) {
    const nextActive = currentPage < upperLimit;
    const prevActive = currentPage > 1;

    return (
        <Styled className='paginator' nextActive={nextActive} prevActive={prevActive}>
            <div onClick={onPrev} className='paginator-button prev'>Prev</div>
            <div onClick={onNext} className='paginator-button next'>Next</div>
        </Styled>
    );
}

const Styled = styled.div`
    width:           100%;
    display:         flex;
    justify-content: space-around;
    align-items:     center;
    margin-bottom:   20px;


    .paginator-button {
        border-radius:    4px;
        width:            80px;
        height:           30px;
        background-color: #222;
        display:          flex;
        justify-content:  center;
        align-items:      center;
        cursor:           pointer;

        &:hover {
            background-color: #494949;
        }
    }
`;