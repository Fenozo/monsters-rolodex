import React, {Component} from 'react';

import './card.styles.css';

import './form-modern.css';

export const Card = props =>{
    return  (
        <div  className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
            <h1>{props.monster.id}</h1>
            <input type="checkbox" className="switch" name={`s${props.monster.id}`} id={`s${props.monster.id}`} />
                <label htmlFor={`s${props.monster.id}`}>Switch</label>
        </div>
    )
};