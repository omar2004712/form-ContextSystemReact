/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { language: 'english' };
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
