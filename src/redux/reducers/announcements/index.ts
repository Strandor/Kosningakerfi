import {
  AnnouncementsActions,
  AppActions,
  ApplicationsActions,
} from "../../actions";
import { Reducer } from "../../types";
import { AnnouncementsState } from "./interface";
import { initialState } from "./utils";

export const AnnouncementsReducer: Reducer<AnnouncementsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AnnouncementsActions.FETCH_ANNOUNCEMENTS:
      return {
        ...state,
        loading: true,
      };
    case AnnouncementsActions.FETCH_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        announcements: action.payload,
      };
    case AnnouncementsActions.FETCH_ANNOUNCEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case AnnouncementsActions.CLOSE_ANNOUNCEMENT:
      return {
        ...state,
        announcements: state.announcements.splice(1),
      };
    default:
      return {
        ...state,
      };
  }
};

export * from "./interface";
