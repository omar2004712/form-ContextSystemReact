/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

Field.contextType = LanguageContext;

export default Field;
