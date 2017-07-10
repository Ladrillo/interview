import React, { Component } from 'react';
import styled from 'styled-components';


export default function FavCounter({ count, clickHandler }) {
    return (
        <Styled className='fav-counter' onClick={clickHandler}>
            <span className='fav-counter-heart'>&#9825;</span>
            <span>{count}</span>
        </Styled>
    );
}

const Styled = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 40px;
    cursor: pointer;

    .fav-counter-heart {
        font-size: 52px;
        color: #FDF253;
        position: absolute;
        top: -30px;
    }
`;