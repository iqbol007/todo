import { Reducer } from "react";
import { TaskActions } from "../../actions/taskActions";
import { ActionTypes } from "../../actions";
import { TaskCategory } from "../taskReducer";

export interface IinitialEditTaskState {
  item: { id: number; title: string | undefined; category: string | undefined };
  loading: boolean;
  error: Error | string | null;
}
const initialState: IinitialEditTaskState = {
  item: { title: "", category: "", id: 0 },
  loading: false,
  error: null,
};

export const editTaskReducer: Reducer<IinitialEditTaskState, TaskActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        item: {
          id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
        },
        loading: false,
        error: null,
      };
    case ActionTypes.EDIT_TASK:
      return {
        ...state,
        item: {
          ...state.item,
          title: action.payload.title,
          category: action.payload.category,
          id: action.payload.id,
        },
        loading: false,
        error: null,
      };
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        item: { id: 0, title: "", category: TaskCategory.EASY },
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
