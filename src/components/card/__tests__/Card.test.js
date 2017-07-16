import Card from '../Card';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('Card', () => {
    const id          = 'id';
    const name        = 'Luke Skywalker';
    const birthday    = 'AAA000X';
    const homeworld   = 'Tatooine';
    const isFav       = false;
    const onEdit      = () => console.log('editing...');
    const onToggleFav = () => console.log('toggling fav...');
 
    it('renders correctly', () => {
        const rendered = renderer.create(
            <Card
                id          = {id}
                name        = {name}
                birthday    = {birthday}
                homeworld   = {homeworld}
                isFav       = {isFav}
                onEdit      = {onEdit}
                onToggleFav = {onToggleFav}
            />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});