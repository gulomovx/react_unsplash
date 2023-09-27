import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ImageContext } from "../App";


const Search = () => {
  const [search, setSearch] = useState("");
  const { fetchData } = useContext(ImageContext)
  // console.log(fetchData); 
  const handleInput = (e) => {
    setSearch(e.target.value)
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${search} &client_id=d6uiWKGgw_zhpFez3eVUvxeus8Z8HUhtk1dLVnqCRFg`)
    setSearch('')
    }
  }

  const handleSearch = () => {
    fetchData(`search/photos?page=1&query=${search} &client_id=d6uiWKGgw_zhpFez3eVUvxeus8Z8HUhtk1dLVnqCRFg`)
    setSearch('')
  }
  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={search}
        onChange={handleInput}
        onKeyDown={handleEnter}
        placeholder="Search photos"
        className="bg-gray-100 border rounded-lg border-gray-300 text-sm w-full indent-2 p-2 outline-none"
      />
      <button onClick={handleSearch} className="bg-blue-500 rounded-lg px-4">Search</button>
    </div>
  );
};

export default Search;
