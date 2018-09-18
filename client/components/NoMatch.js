import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <Fragment>
    <h4>A ship in port is safe; but that is not what ships are built for.</h4>
    <h4>
      Consider returning to <Link to="/">port</Link>.
    </h4>
  </Fragment>
);

export default NoMatch;
