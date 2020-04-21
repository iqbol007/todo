import { TaskView } from "./TaskView";
import { IStateProps } from "./model";
import { useDispatch } from "react-redux";
import { completeTask, removeTask, getDescription, editTask } from "../../../store/actions/taskActions";
import { Itask } from "../../../store/reducers/taskReducer";
const Task = (props:any) => {
  const dispatch  = useDispatch();
const  hadleChangeOne = (id:number) => {
  
  
    dispatch(completeTask(id));
  };
const hadleRemoveItem = (id:number) => {
    dispatch(removeTask(id));
  };
 const  hadleDescipion= (item:Itask) => {
    dispatch(getDescription(item));
  };
 const  hadleEditItem = (title:string,category:string,id:number) => {
    dispatch(editTask(title, category, id));
  };
  const stateProps: IStateProps = {
    ...props,
    handleChange:(id:number) => hadleChangeOne(id),
    handleDesc:(item)=>hadleDescipion(item),
    handleEdit:(title,category,id) => hadleEditItem(title,category,id),
    handleRemove:(id:number)=>hadleRemoveItem(id)
  };
  
  return TaskView(stateProps);
};
export default Task;
