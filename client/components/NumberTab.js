import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { putConversation } from '../store/conversations';

class NumberTab extends Component {
  state = { id: '', alias: '', sendToPhone: true };

  componentDidMount() {
    this.setState({ ...this.props.conversation });
  }

  handleCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked }, () => {
      this.props.putConversation(this.state);
    });
  };

  render() {
    const { active } = this.props;
    const setActive = active === this.state.id;

    return (
      <form className={`number ${setActive && `number-active`}`}>
        <h3>{this.state.id}</h3>
        <label htmlFor="sendToPhone">Forward</label>
        <input
          type="checkbox"
          name="sendToPhone"
          checked={this.state.sendToPhone}
          onChange={this.handleCheckbox}
        />
      </form>
    );
  }
}

const mapState = ({ conversations }) => ({ conversations });

const mapDispatch = dispatch => ({
  putConversation: data => dispatch(putConversation(data))
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(NumberTab)
);
