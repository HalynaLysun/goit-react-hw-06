import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.filters);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
}
