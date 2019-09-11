import React, {Component} from 'react';
import Avatar from '../header';

export default class Header extends Component {
    render(){
        return(
            <header>
                <Avatar />
               <span class="logo">FlyEmbraer</span>
               <span class="title">| Invoices & Payments</span>
            </header>
        );
    }
} 