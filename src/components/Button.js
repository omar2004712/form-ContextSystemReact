import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

    return (
      <button type="submit" className="ui primary button">
        {text}
      </button>
    );
  }
}

Button.contextType = LanguageContext;

export default Button;
