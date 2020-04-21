import { Itask } from "../../../store/reducers/taskReducer";

export interface Model {
  item:Itask;
  handleChange(id:number):void
  handleRemove(id:number):void
  handleDesc(item:Itask):void;
  handleEdit(title:string,category:string,id:number):void
}
export interface IStateProps extends Model {}
 