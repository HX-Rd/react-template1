import ActionTypes from '../../store/actions/ActionTypes';
import { LayoutState, LayoutActionTypes } from './Layout.action.types';

const initialState: LayoutState = {
  loadingBackground: true,
}

const reducer = (state: LayoutState = initialState, action: LayoutActionTypes) : LayoutState => {
  switch(action.type) {
    case ActionTypes.LAYOUT_BACKGROUND_LOAD:
      return {
        ...state,
        loadingBackground: true,
      }
    case ActionTypes.LAYOUT_BACKGROUND_LOAD_SUCCESS:
      return {
        ...state,
        loadingBackground: false,
      }
    default:
      return state;
  }
}

export default reducer;