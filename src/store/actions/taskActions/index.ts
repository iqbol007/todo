import { ActionTypes } from "..";
import { Itask } from "../../reducers/taskReducer";

export interface ITaskComplete {
  type: ActionTypes.COMPLETE_TASK;
  payload: { id: number };
}
export interface ITaskRemove {
  type: ActionTypes.REMOVE_TASK;
  payload: { id: number };
}
export interface ITaskAdd {
  type: ActionTypes.ADD_TASK;
  payload: {
    title: string | undefined;
    category: string | undefined;
    id: number | undefined;
  };
}
export interface IChangeInput {
  type: ActionTypes.CHANGE_INPUT;
  payload: {
    title: string | undefined;
    category: string | undefined;
    id: number;
  };
}
export interface IEditTask {
  type: ActionTypes.EDIT_TASK;
  payload: { title: string; category: string; id: number };
}
export interface IGetDesc {
  type: ActionTypes.GET_DESCRIPTION;
  payload: { item: Itask };
}
export const completeTask = (id: number): ITaskComplete => {
  return { type: ActionTypes.COMPLETE_TASK, payload: { id } };
};
export const removeTask = (id: number): ITaskRemove => {
  return {
    type: ActionTypes.REMOVE_TASK,
    payload: { id },
  };
};
export const addTask = (
  title: string | undefined,
  category: string | undefined,
  id: number | undefined
): ITaskAdd => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: { title, category, id },
  };
};
export const changeInput = (
  category: string | undefined,
  title: string | undefined,
  id: number
): IChangeInput => {
  return {
    type: ActionTypes.CHANGE_INPUT,
    payload: { category, title, id },
  };
};
export const getDescription = (item: Itask): IGetDesc => {
  return {
    type: ActionTypes.GET_DESCRIPTION,
    payload: { item },
  };
};
export const editTask = (
  title: string,
  category: string,
  id: number
): IEditTask => {
  return { type: ActionTypes.EDIT_TASK, payload: { title, category, id } };
};
export type TaskActions =
  | ITaskComplete
  | ITaskRemove
  | ITaskAdd
  | IChangeInput
  | IGetDesc
  | IEditTask;
