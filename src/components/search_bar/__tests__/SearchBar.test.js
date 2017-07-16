import SearchBar from '../SearchBar';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';


describe('SearchBar', () => {
    it('renders correctly', () => {
        const rendered = renderer.create(
            <SearchBar debounce={false} />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
