import React from "react";
import "./search-box.style.css";

export const SearchBox = (props) => (
  <input
    type="search"
    className="search-box"
    placeholder="Search Monsters"
    onChange={props.onSearchChange}
  />
);
