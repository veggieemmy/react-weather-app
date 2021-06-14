import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="🔍 Search" className="btn btn-dark" />
          </div>
        </div>
      </form>
    </div>
  );
}
