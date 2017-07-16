import Paginator from '../Paginator';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';


describe('Paginator', () => {
    it('renders correctly', () => {
        const rendered = renderer.create(
            <Paginator
                onNext = {() => console.log('next!')}
                onPrev = {() => console.log('prev!')}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
