import React, { Component } from 'react';
import styled from 'styled-components';


export default function Heart({ on, toggle }) {
    return (
        <Styled on={on} onClick={toggle}>
            &#9825;
        </Styled>
    );
}

const Styled = styled.span`
    font-size: 16px;
    color: ${props => props.on ? '#FDF253' : '#222'};
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s 0.02s ease-in-out;

    &:hover {
        color: #FDF253;
        transform: scale(1.2);
        transition: all 0.4s 0.02s ease-in-out;
    }
`;