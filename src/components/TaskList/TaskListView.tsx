import React from "react";
import Task from "./Task";
import { IStateProps } from "./model";

export const TaskListView: React.FC<IStateProps> = (prpos: IStateProps) => {
  return (
    <ul className="list-group list">
      {prpos.items.map((task) => (
        <Task  key={task.id} item={task}   />
      ))}
    </ul>
  );
};
