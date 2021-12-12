import { Component } from 'react';
import { UserHelper } from '../../helpers';
import './UserCard.css';
import { User } from '../../types';
import { UserEdit } from '../UserForm/UserEdit';

export class UserCard extends Component<{ user: User }, { user: User }> {
    constructor(props: { user: User }) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    public render() {
        return (
            <div className="UserCard">
                <img className="UserCard-img"
                     src={UserHelper.getPicture(this.state.user)}
                     alt={UserHelper.getFullName(this.state.user)} />

                <span className="UserCard-name">{UserHelper.getFullName(this.state.user)}</span>

                <UserEdit user={this.state.user}
                          userChange={this.handleUserChange.bind(this)}>
                </UserEdit>
            </div>
        );
    }

    private handleUserChange(user: Partial<User>) {
        this.setState({
           user: { ...this.state.user, ...user },
        });
    }
}