import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { multi, place, type, value, onChange } = this.props;

    return (
      <div className="input">
        <label htmlFor={ multi } className="formInputLabel">
          <input
            name={ multi }
            placeholder={ place }
            id={ multi }
            className="inputElement"
            type={ type }
            value={ value }
            onChange={ onChange }
            isRequired
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  multi: PropTypes.string,
  place: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
