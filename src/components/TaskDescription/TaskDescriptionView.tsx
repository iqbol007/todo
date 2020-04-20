import React from "react";
import './TaskDescription.scss'
import { IStateProps } from "./module";

export const TaskDescriptionView: React.FC<IStateProps> = ( props ) => {
  
  return (
    <div className="description">
      <h3>Description</h3>
      <span>{props.item.item.title}</span>
    </div>
  );
};  
