import {ActionTypes} from "../constants";

export const updateFormData = data => {
  return {
    type: ActionTypes.UPDATE_FORM_DATA,
    data
  }
};