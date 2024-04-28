import React from "react";

function Search({handleSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <a className="circular search link icon"></a>
    </div>
  );
}

export default Search;