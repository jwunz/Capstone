import React from 'react';

import SidePanelWidget from './SidePanelWidget.jsx';
import NewPostWidget from './NewPostWidget.jsx';
import PostElement from './PostElement.jsx';
import { BrowserRouter } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="pageBody homeBody">
        <SidePanelWidget />
        <div className="pageContent homeContent">
          <NewPostWidget />
          <PostElement />
        </div>
      </div>
    )
  }
}

export default HomePage;