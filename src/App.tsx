import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import { UserList } from './components/UserList/UserList';

export default class App extends Component {
    public render() {
        return (
            <div>
                <Header>
                </Header>

                <UserList>
                </UserList>
            </div>
        );
    }
}
