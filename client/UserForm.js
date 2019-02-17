import React, { Component } from 'react';

import styles from './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }

    render() {
        return (
            <form 
                className={styles.UserForm} 
                onSubmit={event => this.handleSubmit(event)}
            >
                <input
                    className={styles.UserInput}
                    placeholder='Write your nickname and press enter'
                    onChange={event => this.handleChange(event)}
                    value={this.state.name}
                />
            </form>
        );
    }
}

export default UserForm;