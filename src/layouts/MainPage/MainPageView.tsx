import React from "react";
import "./MainPage.scss";
import TaskList from "../../components/TaskList";
import { IStateProps } from "./model";
import TaskDescription from "../../components/TaskDescription";
import TaskAddForm from "../../components/TaskAddForm";
export const MainPageView: React.FC<IStateProps>  = (props: IStateProps) => {
  return (
    <div className="row p-0 m-0 mb-4">
      <div className="col-md-10 main">
        <div className="row">
          <div className="col-md-4">
            <div className="row addForm">
              <h2>Add form</h2>
              <TaskAddForm />
            </div>
            <div className="row p-0   addForm">
             <TaskDescription item = {props.itemdesc}/>
            </div>
          </div>
          <div className="col-md-6 list">
            <h2>Task list</h2>
            <TaskList items={props.items} />
          </div>
        </div>
      </div>
    </div>
  );
};
