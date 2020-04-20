import { TaskView } from "./TaskView";
import { IStateProps } from "./model";
import { useDispatch } from "react-redux";
import { completeTask, removeTask, getDescription, editTask } from "../../../store/actions/taskActions";
import { Itask } from "../../../store/reducers/taskReducer";
const Task = (props:any) => {
  const dispatch  = useDispatch();
const  hadleChange = (id:number) => {
    dispatch(completeTask(id));
  };
const hadleRemove = (id:number) => {
    dispatch(removeTask(id));
  };
 const  hadleDesc= (item:Itask) => {
    dispatch(getDescription(item));
  };
 const  hadleEdit = (title:string,category:string,id:number) => {
    dispatch(editTask(title, category, id));
  };
  const stateProps: IStateProps = {
    ...props,hadleRemove,hadleEdit,hadleDesc,hadleChange
  };
  return TaskView(stateProps);
};
export default Task;
