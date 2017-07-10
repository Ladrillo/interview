import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card.js';


class FavoritePeople extends Component {
    componentWillMount() {
        this.props.dispatch({ type: 'PEOPLE/GET_FAVORITES' });
    }

    render() {
        const {
            favoritePeople,
            currentPage,
        } = this.props;

        return (
            <div>
            {
                favoritePeople.map(person => {
                    return (
                        <Card
                            key         = {person.id}
                            id          = {person.id}
                            name        = {person.name}
                            image       = {person.image}
                            birthday    = {person.birth_year}
                            homeworld   = {person.homeworldName}
                        />
                    );
                })
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentPage:    state.currentPage,
        favoritePeople: state.favoritePeople,
    };
}

export default connect(mapStateToProps)(FavoritePeople);
