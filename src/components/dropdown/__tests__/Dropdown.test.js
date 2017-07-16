import Dropdown from '../Dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('Dropdown', () => {
    const options = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
    ];
    const changeHandler = () => console.log('changing value...');
    const value         = 2;
 
    it('renders correctly', () => {
        const rendered = renderer.create(
            <Dropdown
                options       = {options}
                changeHandler = {changeHandler}
                value         = {value}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
