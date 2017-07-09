import React, { Component } from 'react';
import './EditableCard.css';


export default class EditableCard extends Component {
    render() {
        const {
            id,
            name,
            image,
            birthday,
            homeworld,
            onSave,
            onCancel
        } = this.props;

        return (
            <div className='card'>
                <div className='card-content'>
                    <div className='card-name'>EDITING {name}</div>
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
                <div onClick={() => onSave(id)}>save</div>
                <div onClick={() => onCancel(id)}>cancel</div>
            </div>
        );
    }
}