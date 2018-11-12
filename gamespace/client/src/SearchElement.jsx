import React from 'react';

import { Link } from 'react-router-dom';

class SearchElement extends React.Component {
  render() {
    return (
    <Link to='/user'>
      <div className="searchResult">
        <img src={this.props.userpic} className="searchResultPic"></img>
          <div className="nameAndInfo">
            <h3 className="searchResultName">{this.props.username}</h3>
            <div className="searchResultInfo">Other info goes here.</div>
          </div>
      </div>
    </Link>
    )
  }
}

export default SearchElement;