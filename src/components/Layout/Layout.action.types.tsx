import ActionTypes from '../../store/actions/ActionTypes';

interface LayoutBackgroundLoadAction {
  type: typeof ActionTypes.LAYOUT_BACKGROUND_LOAD,
}
interface LayoutBackgroundLoadActionSuccess {
  type: typeof ActionTypes.LAYOUT_BACKGROUND_LOAD_SUCCESS,
}

export interface LayoutState {
  loadingBackground: boolean,
}

export type LayoutActionTypes = 
  LayoutBackgroundLoadAction 
  | LayoutBackgroundLoadActionSuccess
