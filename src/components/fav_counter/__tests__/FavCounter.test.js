import FavCounter from '../FavCounter';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('FavCounter', () => {

    it('renders correctly', () => {
        const rendered = renderer.create(
            <FavCounter
                count        = {32}
                clickHandler = {() => ({})}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
