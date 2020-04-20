import { Reducer } from "react";

import { ActionTypes } from "../../actions";
import { TaskActions } from "../../actions/taskActions";
export enum TaskCategory {
  EASY = "green",
  NORMAL = "yellow",
  HIGH = "red",
}
export interface Itask {
  id: number;
  title: string;
  isCompleted: boolean;
  isRemoved: boolean;
  category: string;
}
export interface IinitialState {
  items: Array<Itask>;
  loading: boolean;
  error: null | string | Error;
}

let nextId = 1;
const initialState: IinitialState = {
  items: [
    {
      id: nextId++,
      title:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur vero ratione minus explicabo assumenda excepturi cupiditate a obcaecati modi, aut molestias placeat quasi, eligendi consectetur pariatur eveniet odit rerum porro!  ",
      isCompleted: false,
      isRemoved: false,
      category: TaskCategory.NORMAL,
    },

    {
      id: nextId++,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ex!",
      isCompleted: false,
      isRemoved: false,
      category: TaskCategory.HIGH,
    },
    {
      id: nextId++,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ex!",
      isCompleted: false,
      isRemoved: false,
      category: TaskCategory.EASY,
    },
    {
      id: nextId++,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ex!",
      isCompleted: false,
      isRemoved: false,
      category: TaskCategory.NORMAL,
    },
    {
      id: nextId++,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ex!",
      isCompleted: false,
      isRemoved: false,
      category: TaskCategory.HIGH,
    },
  ],
  loading: false,
  error: null,
};
//@ts-ignore
export const taskReducer: Reducer<IinitialState, TaskActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.COMPLETE_TASK:
      return {
        ...state,
        items: state.items.map((o) =>
          o.id === action.payload.id
            ? {
                ...o,
                isCompleted: !o.isCompleted,
              }
            : o
        ),
      };
    case ActionTypes.REMOVE_TASK:
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload.id),
      };
    case ActionTypes.ADD_TASK:
      if (action.payload.id === 0 || action.payload.id === undefined) {
        return {
          ...state,
          items: [
            {
              id: nextId++,
              isRemoved: false,
              isCompleted: false,
              title: action.payload.title,
              category: action.payload.category,
            },
            ...state.items,
          ].sort((a, b) => a.id - b.id),
          loading: false,
          error: null,
        };
      }

      const existent = state.items.find((o) => o.id === action.payload.id);
      const tasks = state.items.filter((o) => o.id !== action.payload.id);
      if (existent !== undefined) {
        return {
          ...state,
          items: [
            {
              ...existent,
              title: action.payload.title,
              category: action.payload.category,
            },
            ...tasks,
          ].sort((a, b) => a.id - b.id),
          loading: false,
          error: null,
        };
      }

      return;
    default:
      return state;
  }
};
