import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { UserHelper } from '../../helpers';
import './UserCard.css';

export class UserCard extends Component {
    public user = {
        id: '1',
        name: {
            first: 'Mohamed',
            last: 'Dahane',
        },
        picture: 'https://randomuser.me/api/portraits/men/4.jpg',
    }; // Mock only will be deleted

    public render() {
        return (
            <div className="UserCard">
                <img className="UserCard-img"
                     src={UserHelper.getPicture(this.user)}
                     alt={UserHelper.getFullName(this.user)} />

                <span className="UserCard-name">{UserHelper.getFullName(this.user)}</span>

                <Button className="UserCard-edit-btn"
                        variant="dark">Edit</Button>
            </div>
        );
    }
}