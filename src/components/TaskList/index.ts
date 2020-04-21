import { TaskListView } from "./TaskListView";
import { IStateProps } from "./model";

const TaskList = (props: IStateProps) => {
  
  const stateProps = {
    ...props
  };
  console.log(stateProps);
  
  return TaskListView(stateProps);
};
export default TaskList;
