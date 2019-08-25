import React from "react";
import { withRouter } from "react-router";

class Page1 extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <p>
          This is the first page.
          <br />
          Click on the button below.
        </p>
        <button
          onClick={() => {
            history.push("/page2");
          }}
        >
          Go to Page 2 &#x2192;
        </button>
      </div>
    );
  }
}

export default withRouter(Page1);
