import { TaskDescriptionView } from "./TaskDescriptionView";
import { IStateProps } from "./module";

const TaskDescription = (props: IStateProps) => {
  const stateDescription = { ...props };
  return TaskDescriptionView(stateDescription);
};
export default TaskDescription;
