import { Component } from "react";
import * as gtag from "../../lib/gtag";

export default class Contact extends Component {
  state = { message: "" };

  handleInput = (e: any) => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: this.state.message,
      value: 0,
    });

    this.setState({ message: "" });
  };

  render() {
    return (
      <div>
        <h1>This is the Contact page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Message:</span>
            <textarea onChange={this.handleInput} value={this.state.message} />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
