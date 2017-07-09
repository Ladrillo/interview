import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../card/Card.js';
import EditableCard from '../editable_card/EditableCard';
import SearchBar from '../search_bar/SearchBar.js';
import Paginator from '../paginator/Paginator';
import star from '../../images/star.svg';
import wars from '../../images/wars.svg';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.nextHandler   = this.nextHandler.bind(this);
        this.prevHandler   = this.prevHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.editHandler   = this.editHandler.bind(this);
        this.saveHandler   = this.saveHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
    }

    componentWillMount() {
        this.props.dispatch({ type: 'PEOPLE/GET' });
    }

    nextHandler() {
        const { currentPage, searchTerm } = this.props;

        this.props.dispatch({
            type: 'PEOPLE/GET',
            page: currentPage + 1,
            search: searchTerm
        });

        this.props.dispatch({ type: 'CURRENT_PAGE/INCREMENT'});
    }

    prevHandler() {
        const { currentPage, searchTerm } = this.props;

        this.props.dispatch({
            type: 'PEOPLE/GET',
            page: currentPage - 1,
            search: searchTerm
        });

        this.props.dispatch({ type: 'CURRENT_PAGE/DECREMENT'});
    }

    searchHandler(searchTerm) {
        this.props.dispatch({
            type: 'SEARCH_TERM/SET',
            payload: searchTerm
        });

        this.props.dispatch({
            type: 'PEOPLE/GET',
            search: searchTerm
        });

        this.props.dispatch({ type: 'CURRENT_PAGE/RESET' });
    }

    editHandler(id) {
        this.props.dispatch({
            type: 'PERSON/ENTER_EDIT_MODE',
            payload: id
        });
    }

    saveHandler({ id, name, birthday, homeworld }) {
        this.props.dispatch({
            type: 'PERSON/SAVE',
            payload: { id, name, birthday, homeworld }
        });
    }

    cancelHandler(id) {
        this.props.dispatch({ type: 'PERSON/EXIT_EDIT_MODE', payload: id });
    }

    render() {
        const { people, planets, currentPage, editablePeople } = this.props;

        const {
            nextHandler,
            prevHandler,
            searchHandler,
            editHandler,
            saveHandler,
            cancelHandler,
        } = this;

        return (

            <div className='content'>
                <div className='logo'>
                    <img src={star} alt='star-logo' />
                    <span className='interview-text'>The Interview</span>
                    <img src={wars} alt='wars-logo' />
                </div>

                <SearchBar searchHandler={searchHandler} />

                <Paginator
                    currentPage = {currentPage}
                    onNext      = {nextHandler}
                    onPrev      = {prevHandler}
                />

                {
                    people.map(person => {
                        return editablePeople.indexOf(person.id) > -1
                        ?
                            <EditableCard
                                key           = {person.id}
                                id            = {person.id}
                                name          = {person.name}
                                image         = {person.image}
                                birthday      = {person.birth_year}
                                homeworldName = {person.homeworldName}
                                homeworldId   = {person.homeworld}
                                onSave        = {saveHandler}
                                onCancel      = {cancelHandler}
                                planets       = {planets}
                            />
                        :
                            <Card
                                key       = {person.id}
                                id        = {person.id}
                                name      = {person.name}
                                image     = {person.image}
                                birthday  = {person.birth_year}
                                homeworld = {person.homeworldName}
                                onEdit    = {editHandler}
                            />;
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        people:         state.people,
        currentPage:    state.currentPage,
        searchTerm:     state.searchTerm,
        editablePeople: state.editablePeople,
        planets:        state.planets.map(p => ({ name: p.name, id: p.id }))
    };
}

export default connect(mapStateToProps)(App);
