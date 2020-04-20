import { Itask } from "../../store/reducers/taskReducer";
import { IinitalDescState } from "../../store/reducers/taskDescriptionReducer/taskDescriptionReducer";

export interface Model{
    items:Array<Itask>
    itemdesc:IinitalDescState
} 
export interface IStateProps extends Model{

}