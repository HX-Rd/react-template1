import ActionTypes from '../../store/actions/ActionTypes';
import { LayoutActionTypes } from './Layout.action.types';

export const backgroundLoad = () : LayoutActionTypes => {
  return {
    type: ActionTypes.LAYOUT_BACKGROUND_LOAD,
  }
}

export const backgroundLoadSuccess = () : LayoutActionTypes => {
  return {
    type: ActionTypes.LAYOUT_BACKGROUND_LOAD_SUCCESS,
  }
}