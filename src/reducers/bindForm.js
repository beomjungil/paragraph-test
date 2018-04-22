import {ActionTypes} from "../constants";

const initialData = {
  fontSize: 16,
  lineHeight: 100,
  paragraphWidth: 100
};

export const bindForm = (state = initialData, action) => {
  switch (action.type){
    case ActionTypes.UPDATE_FORM_DATA:{
      return action.data
    }
    default:{
      return state;
    }
  }
};