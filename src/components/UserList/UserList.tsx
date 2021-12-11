import { Component } from 'react';
import { Button } from 'react-bootstrap';
import './UserList.css';
import { UserCard } from '../UserCard/UserCard';

export class UserList extends Component {
    public render() {
        return (
            <main className="UserList">
                <div className="UserList-header">
                    <h2 className="UserList-header-title">User List</h2>

                    <Button variant="dark">Add User</Button>
                </div>

                <div className="UserList-content">{this.renderUserListElements()}</div>
            </main>
        );
    }

    public renderUserListElements() {
        return [1, 2, 3, 4, 5].map(() => (<UserCard></UserCard>));
    }
}