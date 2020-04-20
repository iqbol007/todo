import { Reducer } from "react";
import { Itask } from "../taskReducer";
import { TaskActions } from "../../actions/taskActions";
import { ActionTypes } from "../../actions";
export interface IinitalDescState {
  item: Itask;
  loading: boolean;
  error: string | Error | null;
}
const initialDescState: IinitalDescState = {
  item: {
    id: 0,
    title: "",
    isCompleted: false,
    isRemoved: false,
    category: "",
  },
  loading: false,
  error: null,
};
export const taskDescriptionReducer: Reducer<IinitalDescState, TaskActions> = (
  state = initialDescState,
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_DESCRIPTION:
      return {
        ...state,
        item: action.payload.item,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
