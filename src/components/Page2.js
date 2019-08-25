import React from "react";
import { withRouter } from "react-router";

class Page2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(e) {
    this.setState({
      textValue: e.target.value
    });
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <p>This is the second page.</p>

        <div>
          <input
            type="text"
            placeholder="Type something here and press back in browser"
            value={this.state.textValue}
            onChange={this.onTextChange}
          />
        </div>

        <div className="json-box">
          <h2>this.state</h2>
          <pre>{JSON.stringify(this.state, 0, 2)}</pre>
        </div>

        <button
          onClick={() => {
            history.push("/page3");
          }}
        >
          Go to Page 3 &#x2192;
        </button>
      </div>
    );
  }
}

export default withRouter(Page2);
