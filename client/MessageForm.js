import React, { Component } from 'react';
import styles from './MessageForm.css';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    handleSubmit(event) {
        event.preventDefault();
        const message = {
            from: this.props.name,
            text: this.state.text
        }
        this.props.onMessageSubmit(message);
        this.setState({text: ''});
    }

    changeHandler(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <form className={styles.MessageForm} onSubmit={event => this.handleSubmit(event)}>
                <input
                    className={styles.MessageInput}
                    onChange={event => this.changeHandler(event)}
                    value={this.state.text}
                    placeholder='Message'
                />
            </form>
        );
    }
}

export default MessageForm;