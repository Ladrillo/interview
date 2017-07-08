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
        return (
            <div className='content'>
                <div className='logo'>
                    <img src={star} alt='star-logo' />
                    <span className='interview-text'>The Interview</span>
                    <img src={wars} alt='wars-logo' />
                </div>
                <SearchBar />
                <Card />
            </div>
        );
    }
}

export default connect(() => ({}))(App);
