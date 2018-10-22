import React from 'react';
import SidePanelWidget from './SidePanelWidget.jsx';
import SearchElement from './SearchElement.jsx';
import { connect } from 'react-redux';
import { getUsers } from './actions/userActions';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from './store';


class SearchPage extends React.Component {
  
  componentDidMount() {
    this.props.getUsers();
  }
  
  render() {
    const { users } = this.props.user;

    return (
      // <Provider store={store}>
        <div className="pageBody searchBody">
          <SidePanelWidget />
          <div className="pageContent searchContent">
            { users.map(({ username, userpic, posts, email, dob }) => (
              <SearchElement username={username} userpic={userpic} />
            ))}
          </div>
        </div>
      // </Provider>
    )
  }
}

SearchPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { getUsers })(SearchPage);