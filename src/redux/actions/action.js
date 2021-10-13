export const SUBMIT_PERSONAL = 'SUBMIT_PERSONAL';
export const SUBMIT_PROFESSIONAL = 'SUBMIT_PROFESSIONAL';

export const personalForm = (payload) => ({ type: SUBMIT_PERSONAL, payload });

export const professionalForm = (payload) => ({ type: SUBMIT_PROFESSIONAL, payload });
