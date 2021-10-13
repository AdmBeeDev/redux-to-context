import { SUBMIT_PROFESSIONAL } from '../actions/action';

const PROFESSIONAL_STATE = {
  curriculo: '',
  cargo: '',
  resumo: '',
};

function professionalReducer(state = PROFESSIONAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_PROFESSIONAL:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default professionalReducer;
