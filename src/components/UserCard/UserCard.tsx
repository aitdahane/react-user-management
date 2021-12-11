import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { UserHelper } from '../../helpers';
import './UserCard.css';
import { User } from '../../types';
import { UserEdit } from '../UserForm/UserEdit';

export class UserCard extends Component<{ user: User }, any> {
    public user = this.props.user;

    public render() {
        return (
            <div className="UserCard">
                <img className="UserCard-img"
                     src={UserHelper.getPicture(this.user)}
                     alt={UserHelper.getFullName(this.user)} />

                <span className="UserCard-name">{UserHelper.getFullName(this.user)}</span>

                <UserEdit user={this.user}>
                </UserEdit>
            </div>
        );
    }
}