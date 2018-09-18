import React, { Component } from 'react';

import NumberTabs from './NumberTabs';
import Chat from './Chat';

class Conversations extends Component {
  state = { active: '' };

  setActive = event => {
    if (event.target.tagName === 'H3') {
      this.setState({ active: event.target.innerHTML });
    }
  };

  render() {
    const { active } = this.state;

    return (
      <div id="conversations">
        <div id="numbers" onClick={this.setActive}>
          <NumberTabs active={active} />
        </div>
        <div id="conversation">
          {/* Use key to create a new instance of Chat if a new active number is set */}
          <Chat key={active} active={active} />
        </div>
      </div>
    );
  }
}

export default Conversations;
