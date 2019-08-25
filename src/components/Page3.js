import React from "react";
import { withRouter } from "react-router";

class Page3 extends React.Component {
  render() {
    return (
      <div>
        <p>This is the last page.</p>
      </div>
    );
  }
}

export default withRouter(Page3);
