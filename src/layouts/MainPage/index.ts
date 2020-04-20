import { MainPageView } from "./MainPageView";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/reducers";
import { IinitialState } from "../../store/reducers/taskReducer";
import { IStateProps } from "./model";
import { IinitalDescState } from "../../store/reducers/taskDescriptionReducer/taskDescriptionReducer";

const MainPage = () => {
  const { items } = useSelector<IRootState, IinitialState>(
    (state) => state.tasks
  );
  const itemdesc = useSelector<IRootState,IinitalDescState>(state=>state.descTask) 
  const propsState:IStateProps = {items,itemdesc};
  return MainPageView(propsState);
};
export default MainPage;
