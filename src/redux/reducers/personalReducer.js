import { SUBMIT_PERSONAL } from '../actions/action';

const PERSONAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

function personalReducer(state = PERSONAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_PERSONAL:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default personalReducer;
