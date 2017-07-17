import React, { Component } from 'react';
import StyledButton from '../../styled/button';
import Dropdown from '../dropdown/Dropdown';
import './EditableCard.css';


export default class EditableCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:      this.props.name,
            birthday:  this.props.birthday,
            homeworld: this.props.homeworldId,
        };

        this.save        = this.save.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    save(e) {
        const { name, birthday, homeworld } = this.state;
        const { id, onSave }                = this.props;

        if (! name || ! birthday) {
            alert('missing required fields');
            return;
        }

        onSave({ id, name, birthday, homeworld });
    }

    cancel(e) {
         this.props.onCancel(this.props.id);
    }

    changeValue(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { changeValue, save, cancel }                  = this;
        const { image, homeworldName, homeworldId, planets } = this.props;
        const { name, birthday, homeworld }                  = this.state;

        return (
            <div className='card'>
                <div className='card-content'>
                    <div className='card-name'>
                        <input
                            name      = 'name'
                            value     = {name}
                            className = 'name'
                            onChange  = {changeValue}
                        />
                    </div>
                    <img src={`http://localhost:3008/${image}`} alt='profile' />
                    <p>
                        <span>Birthday:</span>
                        <input
                            name      = 'birthday'
                            value     = {birthday}
                            className = 'birthday'
                            onChange  = {changeValue}
                        />
                    </p>
                    <p>
                        <span>Homeworld:</span>
                        <span>
                            <Dropdown
                                name          = 'homeworld'
                                options       = {planets}
                                value         = {homeworld}
                                changeHandler = {changeValue}
                                className     = 'homeworld'
                            />
                        </span>
                    </p>
                </div>
                <div className='card-buttons'>
                    <StyledButton className='save-button' onClick={save}>save</StyledButton>
                    <StyledButton className='cancel-button' onClick={cancel}>cancel</StyledButton>
                </div>
            </div>
        );
    }
}
