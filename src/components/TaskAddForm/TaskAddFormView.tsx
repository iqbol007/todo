import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, addTask } from "../../store/actions/taskActions";
import { IRootState } from "../../store/reducers";
import { IinitialEditTaskState } from "../../store/reducers/taskEditReducer";

export const TaskAddFormView: React.FC = () => {
  const refTitle = useRef<HTMLTextAreaElement | null>(null);
  const refCategory = useRef<HTMLSelectElement | null>(null);
  const { item } = useSelector<IRootState, IinitialEditTaskState>(
    (state) => state.editTask
  );

  const dispatch = useDispatch();

  const handleChange = () => {
    const category = refCategory.current?.value;
    const title = refTitle.current?.value;

    dispatch(changeInput(category, title, item.id));
  };

  const handleSublit = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (item.title !== undefined && item.title.trim()) {
      dispatch(addTask(item.title, item.category, item.id));
    }
  };
  return (
    <form onSubmit={handleSublit}>
      <div className="input-group mb-3 ml-2 mr-4">
        <textarea
          onChange={handleChange}
          onSubmit={handleSublit}
          value={item.title}
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon3"
          ref={refTitle}
          name="title"
        />
        <div className="input-group-append">
          <button
            onClick={handleSublit}
            className="btn btn-outline-success"
            type="button"
            id="button-addon2"
          >
            Add task
          </button>
        </div>
      </div>
      <div className="input-group mb-3 ml-2 mr-4">
        <select
          className="custom-select"
          id="inputGroupSelect02"
          value={item.category}
          ref={refCategory}
          onChange={handleChange}
          name="category"
        >
          <option value="green">Easy</option>
          <option value="yellow">Normal</option>
          <option value="red">High</option>
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Priority
          </label>
        </div>
      </div>
    </form>
  );
};
