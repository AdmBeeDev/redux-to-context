import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { professionalForm } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculo: '',
      cargo: '',
      resumo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { history, sendProfessionalData } = this.props;
    sendProfessionalData(this.state);
    history.push('/formdisplay');
  }

  render() {
    const { curriculo, cargo, resumo } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="resumo" className="formInputLabel">
              Resumo do Currículo
              <textarea
                name="curriculo"
                id="resumo"
                className="textArea"
                value={ curriculo }
                onChange={ this.handleChange }
                placeholder="Resumo do Currículo"
              />
            </label>
            <Input
              multi="cargo"
              place="Insira o cargo"
              type="text"
              name="cargo"
              value={ cargo }
              onChange={ this.handleChange }
            />
            <label htmlFor="cargo" className="formInputLabel">
              Descrição do Cargo
              <textarea
                name="resumo"
                id="cargo"
                className="textArea"
                value={ resumo }
                onChange={ this.handleChange }
              />
            </label>
            <button type="submit" className onClick={ this.onSubmit }>Enviar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

ProfessionalForm.propTypes = {
  sendPersonalData: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sendProfessionalData: (payload) => dispatch(professionalForm(payload)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
