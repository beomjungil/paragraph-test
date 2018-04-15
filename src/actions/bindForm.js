import {UPDATE_FORM_DATA} from "../constants";

export const updateFormData = data => {
  return {
    type: UPDATE_FORM_DATA,
    data
  }
};