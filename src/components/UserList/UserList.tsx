import { Component } from 'react';
import { Button } from 'react-bootstrap';
import './UserList.css';

export class UserList extends Component {
    public render() {
        return (
            <main className="UserList">
                <div className="UserList-header">
                    <h2 className="UserList-header-title">User List</h2>

                    <Button variant="secondary">Add User</Button>
                </div>

                <div className="UserList-content">{this.renderUserListElements()}</div>
            </main>
        );
    }

    public renderUserListElements() {
        return undefined;
    }
}