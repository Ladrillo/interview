import FavoritePeople from '../FavoritePeople';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';


describe('FavoritePeople', () => {

    it('renders correctly', () => {
        const rendered = renderer.create(
            <FavoritePeople
                store = {{
                    getState:  () => ({ currentPage: 2, favoritePeople: [{id: 2}] }),
                    dispatch:  () => ({}),
                    subscribe: () => ({}),
                 }}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
