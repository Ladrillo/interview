import React, { Component } from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/merge';
import './SearchBar.css';


export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // we only want to AJAX  after 200 milliseconds of 'radio silence'
        const input = document.querySelector('.search-bar-input');
        const { searchHandler } = this.props;

        const stream = Observable.fromEvent(input, 'input');

        stream
            .debounceTime(200)
            .subscribe(e => searchHandler(this.state.searchTerm));
    }

    onChange(event) {
        const searchTerm = event.target.value;
        this.setState({ searchTerm });
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    className   = 'search-bar-input'
                    placeholder = 'Search Your Destiny'
                    value       = {this.state.searchTerm}
                    onChange    = {this.onChange}
                />
            </div>
        );
    }
}
