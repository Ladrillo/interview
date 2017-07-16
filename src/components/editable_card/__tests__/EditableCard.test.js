import EditableCard from '../EditableCard';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('EditableCard', () => {

    it('renders correctly', () => {
        const rendered = renderer.create(
            <EditableCard
                key           = {1}
                id            = {1}
                name          = {'Luke Skywalker'}
                image         = {'luke_skywalker.jpg'}
                birthday      = {'XXXOOO'}
                homeworldName = {'Tatooine'}
                homeworldId   = {1}
                onSave        = {() => ({})}
                onCancel      = {() => ({})}
                planets       = {[]}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
