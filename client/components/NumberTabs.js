import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NumberTab from './NumberTab';

const NumberTabs = ({ conversations, active }) => {
  // Sort from newest to oldest numbers
  const keys = Object.keys(conversations).sort(
    (a, b) => conversations[a].createdAt < conversations[b].createdAt
  );

  return (
    <Fragment>
      <h2 id="numbersTitle">Phone Numbers</h2>
      {keys.map(key => (
        <NumberTab
          key={key}
          active={active}
          conversation={conversations[key]}
        />
      ))}
    </Fragment>
  );
};

const mapState = ({ conversations }) => ({ conversations });

export default withRouter(connect(mapState)(NumberTabs));
