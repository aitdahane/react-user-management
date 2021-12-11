import { Component } from 'react';
import { Button } from 'react-bootstrap';
import './UserList.css';
import { UserCard } from '../UserCard/UserCard';
import { UserApiAdapter } from '../../api/UserApiAdapter';
import { User } from '../../types';

export class UserList extends Component<any, { users: User[] }> {
    public componentDidMount() {
        UserApiAdapter.getUsers()
            .then((users) => this.setState({ users }));
    }

    public render() {
        if (!this.state?.users) return (<div>Loading...</div>);
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
        const { users } = this.state;
        return users.map((user) => (
            <UserCard key={user.id}
                      user={user}>
            </UserCard>
        ));
    }
}