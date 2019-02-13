import React, { Component } from "react";

class Dropdown extends Component {
    state = {
      hasFocus: false,
      lastSelect: ""
    };
  
    handleChange = e => {
      let upd = e.target.value;
      this.setState({ lastSelect: upd });
    };
  
    handleBlur = e => {
      this.props.onBlur(e);
      this.setState({ hasFocus: false });
    };
  
    handleFocus = e => {
      e.target.focus();
      this.props.onFocus(e);
      this.setState({ hasFocus: true });
    };
  
    render() {
      return (
        <select
          size="8"
          id="list-suggestions"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.lastSelect}
          onChange={this.handleChange}
        >
          {this.props.children}
        </select>
      );
    }
  }

  export default Dropdown;