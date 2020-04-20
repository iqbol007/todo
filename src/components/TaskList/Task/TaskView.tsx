import React, { ChangeEvent } from "react";
import { IStateProps } from "./model";


import "./Task.scss";

export const TaskView: React.FC<IStateProps> = ({ item },props:IStateProps) => {
  const { id, isCompleted, title, category } = item;
  return (
    <li className="list-group-item">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={isCompleted}
              onChange={(event: ChangeEvent<HTMLInputElement>)=>props.hadleChange(id)}
            />
          </div>
        </div>
        <span
          className={`form-control ${isCompleted ? "" : category}`}
          aria-label="Text input with checkbox"
        >
          {title.length <= 20 ? (
            <span className={`${isCompleted ? "complatedTask" : ""}`}>
              {title}
            </span>
          ) : (
            <span className={`${isCompleted ? "complatedTask" : ""}`}>{title.slice(0, 20)}.....</span>
          )}
        </span>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label onClick={(event:React.MouseEvent)=>props.hadleDesc(item)} className="btn btn-outline-info">
            <input type="radio" name="options" id="option1" />
            More
          </label>
          <label onClick={(event:React.MouseEvent)=>props.hadleRemove(id)} className="btn btn-outline-danger">
            <input type="radio" name="options" id="option1" />
            <i className="fa fa-trash" aria-hidden="true"></i>
          </label>
          <label
            className={`btn btn-outline-warning ${
              isCompleted ? " disabled" : ""
            }`}
            onClick={(event:React.MouseEvent)=>props.hadleEdit(title,category,id)}
          >
            <input type="radio" name="options" id="option3" />
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </label>
        </div>
      </div>
    </li>
  );
};
