import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import estados from './data/estados';
import { personalForm } from '../redux/actions/action';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'Acre',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { history, sendPersonalData } = this.props;
    sendPersonalData(this.state);
    history.push('/professionalForm');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <Input
              multi="nome"
              place="Insira o nome"
              type="text"
              onChange={ this.handleChange }
              value={ nome }
            />
            <Input
              multi="email"
              place="Insira o e-mail"
              type="text"
              onChange={ this.handleChange }
              value={ email }
            />
            <Input
              multi="cpf"
              place="Insira o CPF"
              type="text"
              onChange={ this.handleChange }
              value={ cpf }
            />
            <Input
              multi="endereco"
              place="Informe o endereço"
              type="text"
              onChange={ this.handleChange }
              value={ endereco }
            />
            <Input
              multi="cidade"
              place="Insira o Cidade"
              type="text"
              onChange={ this.handleChange }
              value={ cidade }
            />
            <label htmlFor="estado" className="formInputLabel">
              <select
                placeholder="Estado"
                id="Estado"
                className="inputElement"
                type="select"
                name={ estado }
                onChange={ this.handleChange }
              >
                {
                  estados.map((est) => (
                    <option
                      key={ Object.keys(est) }
                      value={ Object.values(est) }
                    >
                      {Object.values(est)}
                    </option>
                  ))
                }
              </select>
            </label>
            <button type="submit" onClick={ this.onSubmit }>Enviar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

PersonalForm.propTypes = {
  sendPersonalData: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sendPersonalData: (payload) => dispatch(personalForm(payload)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
