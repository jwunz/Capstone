import React from 'react';

class SearchWidget extends React.Component {
  render() {
    return (
      <form className="searchWidget">
        <input type="text" placeholder="Search for Users and Clubs"></input>
        <input type="submit" value="Search"></input>
      </form>
    )
  }
}

export default SearchWidget;