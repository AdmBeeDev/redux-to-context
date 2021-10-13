import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { professionalInfo, personalInfo } = this.props;
    const { nome, endereco, email, cpf, estado, cidade } = personalInfo;
    const { curriculo, resumo, cargo } = professionalInfo;
    return (
      <div>
        <h1>Resultado do Formulário</h1>
        <p>Nome</p>
        <p>{nome}</p>
        <p>Email</p>
        <p>{email}</p>
        <p>CPF</p>
        <p>{cpf}</p>
        <p>Endereço</p>
        <p>{endereco}</p>
        <p>Cidade</p>
        <p>{cidade}</p>
        <p>Estado</p>
        <p>{estado}</p>
        <p>Currículo</p>
        <p>{curriculo}</p>
        <p>Cargo</p>
        <p>{cargo}</p>
        <p>Resumo da Vaga</p>
        <p>{resumo}</p>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalInfo: PropTypes.object,
  professionalInfo: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  personalInfo: state.personalReducer,
  professionalInfo: state.professionalReducer,
});

export default connect(mapStateToProps)(FormDataDisplay);
