import React, {Component} from 'react';
import './search-box.styles.css';
export const SearchBox = props => (
    <input 
    className='search-box'
    type='search'
    placeholder= {props.placeholder}
    onChange={props.handleChange}
    />
);