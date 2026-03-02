import React from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/login");
  };

  return (
    <div className="search-box">


      <div className="search-row">
        <div className="input-group">
          <label>From</label>
          <input type="text" placeholder="Enter source city" />
        </div>

        <div className="input-group">
          <label>To</label>
          <input type="text" placeholder="Enter destination city" />
        </div>

        <div className="input-group">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>


      <button className="search-btn" onClick={handleSearch}>Search Buses</button>

    </div>
  );
}

export default SearchBox;