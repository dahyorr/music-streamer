import { useState } from "react";
import { connect } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { search } from "../actions";

const Search = ({ search }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault()
    search(input.trim());
    setInput("");
  };

  return (
    <form className="Search" onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={input}/>
      <button type='submit' className="submit flex" id="submit">
        <FiSearch className="icon" />
      </button>
    </form>
  );
};
export default connect(null, { search })(Search);
