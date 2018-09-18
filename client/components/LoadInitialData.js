import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getUser } from '../store/user';
import { getConversations } from '../store/conversations';
import { getMessages } from '../store/messages';
import Main from './Main';

export class LoadInitialData extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      error: false
    };
  }

  async componentDidMount() {
    try {
      await this.props.load();
      this.setState({ loaded: true });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const { loaded, error } = this.state;
    return loaded ? (
      <Main />
    ) : error ? (
      <div>Error loading page</div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    load: async () => {
      console.log('loading...');
      // await dispatch(getUser());
      await dispatch(getConversations());
      await dispatch(getMessages());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatch
  )(LoadInitialData)
);
