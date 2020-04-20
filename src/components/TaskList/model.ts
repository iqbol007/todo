import { Itask } from "../../store/reducers/taskReducer";

export interface Model {
  items: Array<Itask>;
}
export interface IStateProps extends Model {}
