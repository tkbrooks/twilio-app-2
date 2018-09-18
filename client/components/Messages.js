import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Messages extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  render() {
    const { messages, active } = this.props;
    const activeMessages = messages[active];

    return (
      <div id="messages">
        {activeMessages &&
          activeMessages.map(({ id, sent, body }) => (
            <div key={id} className={sent ? 'sent' : 'received'}>
              {body}
            </div>
          ))}
      </div>
    );
  }
}

const mapState = ({ messages }) => ({ messages });

export default withRouter(connect(mapState)(Messages));
