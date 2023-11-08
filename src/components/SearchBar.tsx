import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ handelSubmit }) => {
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();
    handelSubmit(input);
  };

  const changeInput = (e) => {
    const text = e.target.value;
    if (text === "") {
      handelSubmit("");
    }
    setInput(text.toLowerCase());
  };

  return (
    <form className='relative p-1 text-black text-lg' onSubmit={search}>
      <input
        type='text'
        name='search'
        value={input}
        onChange={changeInput}
        autoComplete={"off"}
        maxLength={"37"}
        className={"outline-none py-1 px-4 w-72 rounded-full mr-2"}
      />
      <button className='absolute right-5 top-[24%]  text-2xl'>
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
