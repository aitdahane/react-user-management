import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';

export class Header extends Component<any, any> {
    public render() {
        return (
            <header className="Header">
                <img src={logo}
                     alt="logo"
                     className="Header-logo" />

                <h1 className="Header-title">User Management App</h1>
            </header>
        );
    }
}