import { Itask } from "../../../store/reducers/taskReducer";

export interface Model {
  item:Itask
  hadleChange:(id:number) => void| undefined
  hadleRemove:(id:number)=>void|undefined
  hadleDesc:(item:Itask)=>void|undefined
  hadleEdit:(title:string,category:string,id:number)=>void
}
export interface IStateProps extends Model {
  
  
}
 