import React, { Component } from 'react';


export default function Dropdown({ options, value, changeHandler }) {
    return (
        <select onChange={changeHandler} value={value}>
        {
            options.map(option => (
                <option value={option.id} key={option.id}>{option.name}</option>
            ))
        }
        </select>
    );
}
