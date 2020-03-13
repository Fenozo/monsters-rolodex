import React, {Component} from 'react';
import { Card } from '../card/Card.component';

import './card-list.styles.css';


export const CardList = props => (
    <div className='card-list'>{
        (Array.isArray(props.monsters) === true) ? props.monsters.map((monster, index) => {
            if (typeof monster === 'object') {
                
                return (<Card key={index} monster={monster} />)
            }
        }) : null
        }
    </div>
)