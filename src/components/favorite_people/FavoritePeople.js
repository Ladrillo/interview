import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../card/Card.js';


class FavoritePeople extends Component {
    componentWillMount() {
        this.props.dispatch({ type: 'FAVORITE_PEOPLE/GET' });
    }

    render() {
        const {
            favoritePeople,
            currentPage,
        } = this.props;

        {
            if (! favoritePeople.length) {
                return <Styled>You have no favorites.</Styled>;
            }
        }

        return (
            <Styled transform>
            {
                favoritePeople.map(person => {
                    return (
                        <Card
                            key         = {person.id}
                            id          = {person.id}
                            name        = {person.name}
                            image       = {person.image}
                            birthday    = {person.birth_year}
                        />
                    );
                })
            }
            </Styled>
        );
    }
}

const Styled = styled.div`
    transform-origin: top center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    transform: ${props => props.transform ? 'scale(0.5)' : 'scale(1)' };
`;

function mapStateToProps(state) {
    return {
        currentPage:    state.currentPage,
        favoritePeople: state.favoritePeople,
    };
}

export default connect(mapStateToProps)(FavoritePeople);
