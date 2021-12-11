import { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './UserEdit.css';
import { Name, User } from '../../types';
import { UserHelper } from '../../helpers';
import { UserApiAdapter } from '../../api';

interface UserEditState {
    show?: boolean;
    firstName?: string;
    lastName?: string;
    picture?: string;
}

export class UserEdit extends Component<{ user: User }, UserEditState> {
    constructor(props: { user: User }) {
        super(props);
        this.state = {
            show: false,
            firstName: UserHelper.getFirstName(this.props.user),
            lastName: UserHelper.getLastName(this.props.user),
            picture: UserHelper.getPicture(this.props.user),
        };
    }

    public render() {
        return (
            <>
                <Button className="UserEdit-btn"
                        variant="dark"
                        onClick={() => this.handleShow()}>Edit</Button>

                <Modal show={this.state?.show}
                       onHide={() => this.handleClose()}
                       backdrop="static"
                       keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User : {UserHelper.getFullName(this.props.user)}</Modal.Title>
                    </Modal.Header>

                    <Form noValidate onSubmit={this.handleSubmit.bind(this)}>
                    <Modal.Body>
                            <Form.Group className="mb-3" controlId="fistName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="Enter a first name"
                                              name="fistName"
                                              defaultValue={this.state.firstName}
                                              onChange={this.handleChange.bind(this)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Enter a last name"
                                              name="lastName"
                                              defaultValue={this.state.lastName}
                                              onChange={this.handleChange.bind(this)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="picture">
                                <Form.Label>Picture Link</Form.Label>
                                <Form.Control placeholder="ex: https://url.com/25.jpg"
                                              name="picture"
                                              defaultValue={this.state.picture}
                                              onChange={this.handleChange.bind(this)} />
                            </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" type="button" onClick={() => this.handleClose()}>Close</Button>
                        <Button variant="dark" type="submit">Save changes</Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }

    public handleShow(): void {
        this.setState({ show: true });
    }

    public handleClose(): void {
        this.setState({ show: false });
    }

    public handleChange(event: any): void {
        this.setState({ [event.target.name]: event.target.value });
    }

    public handleSubmit(event: any): void {
        event.preventDefault();
        const payload = {
            name: { first: this.state.firstName, last: this.state.lastName } as Name,
            picture: this.state.picture,
        };
        UserApiAdapter.update(this.props.user.id, payload)
            .then(() => this.handleClose());
    }
}