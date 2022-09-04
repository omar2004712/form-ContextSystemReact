import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button type="submit" className={`ui ${color} button`}>
            <LanguageContext.Consumer>
              {(language) => (language === 'english' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
