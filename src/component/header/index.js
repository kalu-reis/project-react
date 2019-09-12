import React, {Component} from 'react';
import Avatar from '../avatar';

export default class Header extends Component {
    render(){
        return(
            <header>
               <span className="logo">Teste</span>
               <span className="title">| Titles</span>

               <Avatar />
            </header>
        );
    }
} 