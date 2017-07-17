import React, { Component } from 'react';


export default function Dropdown({ options, value, changeHandler, className, name }) {
    return (
        <select name={name} className={className} onChange={changeHandler} value={value}>
        {
            options.map(option => (
                <option value={option.id} key={option.id}>{option.name}</option>
            ))
        }
        </select>
    );
}
