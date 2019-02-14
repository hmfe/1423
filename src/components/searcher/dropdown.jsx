import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    hasFocus: false,
    lastSelect: ""
  };

  handleKeyDown = e => {

    if(e.key === "Enter")
    {
      const movie = this.props.result.filter(
        m => (parseInt(e.target.value,10) === m.id)
      );
     
      this.props.onQueryPostSelect(movie[0]);
    }
  }

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
        onKeyDown={this.handleKeyDown}
      >
        {this.props.children}
      </select>
    );
  }
}

export default Dropdown;
