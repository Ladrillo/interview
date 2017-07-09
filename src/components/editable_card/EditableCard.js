import React, { Component } from 'react';
import StyledButton from '../../styled/button';
import './EditableCard.css';


export default class EditableCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:     this.props.name,
            birthday: this.props.birthday,
        };

        this.save           = this.save.bind(this);
        this.cancel         = this.cancel.bind(this);
        this.changeName     = this.changeName.bind(this);
        this.changeBirthday = this.changeBirthday.bind(this);
    }

    save(e) {
        const { name, birthday } = this.state;
        const { id, onSave }     = this.props;

        if (! name || ! birthday) {
            alert('missing required fields');
            return;
        }

        onSave({ id, name, birthday });
    }

    cancel(e) {
         this.props.onCancel(this.props.id);
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }

    changeBirthday(e) {
        this.setState({ birthday: e.target.value });
    }

    render() {
        const { changeName, changeBirthday, save, cancel } = this;
        const { image, homeworld }                         = this.props;
        const { name, birthday }                           = this.state;

        return (
            <div className='card'>
                <div className='card-content'>
                    <div className='card-name'>
                        <input
                            value     = {name}
                            className = 'name'
                            onChange  = {changeName}
                        />
                    </div>
                    <img src={`http://localhost:3008/${image}`} alt='profile' />
                    <p>
                        <span>Birthday:</span>
                        <input
                            value     = {birthday}
                            className = 'birthday'
                            onChange  = {changeBirthday}
                        />
                    </p>
                    <p>
                        <span>Homeworld:</span>
                        <span>{homeworld}</span>
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