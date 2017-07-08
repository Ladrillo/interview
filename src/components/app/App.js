import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card.js';
import SearchBar from '../search_bar/SearchBar.js';
import Paginator from '../paginator/Paginator';
import star from '../../images/star.svg';
import wars from '../../images/wars.svg';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.nextHandler = this.nextHandler.bind(this);
        this.prevHandler = this.prevHandler.bind(this);
    }

    componentWillMount() {
        this.props.dispatch({ type: 'PEOPLE/GET' });
    }

    nextHandler() {
        const { currentPage } = this.props;

        this.props.dispatch({ type: 'PEOPLE/GET', payload: currentPage + 1 });
        this.props.dispatch({ type: 'CURRENT_PAGE/INCREMENT'});
    }

    prevHandler() {
        const { currentPage } = this.props;

        this.props.dispatch({ type: 'PEOPLE/GET', payload: currentPage - 1 });
        this.props.dispatch({ type: 'CURRENT_PAGE/DECREMENT'});
    }

    render() {
        const { people, currentPage }      = this.props;
        const { nextHandler, prevHandler } = this;
        const upperLimit                   = 9;

        return (
            <div className='content'>
                <div className='logo'>
                    <img src={star} alt='star-logo' />
                    <span className='interview-text'>The Interview</span>
                    <img src={wars} alt='wars-logo' />
                </div>

                <SearchBar />

                <Paginator
                    upperLimit  = {upperLimit}
                    currentPage = {currentPage}
                    onNext      = {nextHandler}
                    onPrev      = {prevHandler}
                />
                {
                    people.map(person => (
                        <Card
                            key       = {person.id}
                            name      = {person.name}
                            image     = {person.image}
                            birthday  = {person.birth_year}
                            homeworld = {person.homeworldName}
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
        currentPage: state.currentPage,
    };
}

export default connect(mapStateToProps)(App);
