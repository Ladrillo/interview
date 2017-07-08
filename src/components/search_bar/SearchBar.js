import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            searchTerm: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const searchTerm = event.target.value;

        this.setState({ searchTerm });
        this.props.searchHandler(searchTerm);
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    placeholder = 'Search Your Destiny'
                    value       = {this.state.searchTerm}
                    onChange    = {this.onChange}
                />
            </div>
        );
    }
}
