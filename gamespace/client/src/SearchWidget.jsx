import React from 'react';

import { Link } from 'react-router-dom';

class SearchWidget extends React.Component {
  render() {
    return (
      <form className="searchWidget">
        <input type="text" placeholder="Search for Users and Clubs"></input>
        <Link to='/search'><input type="submit" value="Search"></input></Link>
      </form>
    )
  }
}

export default SearchWidget;