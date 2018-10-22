import React from 'react';

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