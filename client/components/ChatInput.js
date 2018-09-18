import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postMessage } from '../store/messages';

class ChatInput extends Component {
  state = { sent: true, body: '', conversationId: '' };

  componentDidMount() {
    this.setState({ conversationId: this.props.active });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body, conversationId } = this.state;

    if (body && conversationId) {
      event.target.reset();
      this.props.postMessage(this.state);
    }
  };

  render() {
    const disabled = !this.state.conversationId;

    return (
      <form id="chatInput" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="body"
          value={this.state.input}
          onChange={this.handleChange}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled}>
          Send
        </button>
      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return { postMessage: input => dispatch(postMessage(input)) };
};

export default withRouter(
  connect(
    null,
    mapDispatch
  )(ChatInput)
);
