import Heart from '../Heart';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';


describe('Heart', () => {
    it('renders correctly', () => {
        const rendered = renderer.create(
            <Heart
                on     = {true}
                toggle = {()=>console.log('toggling...')}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
