import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (from && to) {
      navigate(`/search-results?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`);
    } else {
      alert("Please enter both 'From' and 'To' cities.");
    }
  };

  return (
    <div className="search-box">


      <div className="search-row">
        <div className="input-group">
          <label>From</label>
          <input 
            type="text" 
            placeholder="Enter source city" 
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>To</label>
          <input 
            type="text" 
            placeholder="Enter destination city" 
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Date</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>


      <button className="search-btn" onClick={handleSearch}>Search Buses</button>

    </div>
  );
}

export default SearchBox;