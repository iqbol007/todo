import { combineReducers } from "redux";
import { taskReducer, IinitialState } from "./taskReducer";
import { editTaskReducer, IinitialEditTaskState } from "./taskEditReducer";
import {
  taskDescriptionReducer,
  IinitalDescState,
} from "./taskDescriptionReducer/taskDescriptionReducer";
import { History } from "history";
import { connectRouter } from "connected-react-router";
export interface IRootState {
  readonly tasks: IinitialState;
  readonly editTask: IinitialEditTaskState;
  readonly descTask: IinitalDescState;
  readonly router: any;
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    tasks: taskReducer,
    editTask: editTaskReducer,
    descTask: taskDescriptionReducer,
  });
