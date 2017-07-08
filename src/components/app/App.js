import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card.js';
import SearchBar from '../search_bar/SearchBar.js';
import star from '../../images/star.svg';
import wars from '../../images/wars.svg';
import './App.css';


class App extends Component {
    componentWillMount() {
        this.props.dispatch({ type: 'PEOPLE/GET'});
    }

    render() {
        const { people } = this.props;

        return (
            <div className='content'>
                <div className='logo'>
                    <img src={star} alt='star-logo' />
                    <span className='interview-text'>The Interview</span>
                    <img src={wars} alt='wars-logo' />
                </div>
                <SearchBar />
                {
                    people.map(person => (
                        <Card
                            name     = { person.name }
                            image    = { person.image }
                            birthday = { person.birth_year }
                        />
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
    };
}

export default connect(mapStateToProps)(App);
