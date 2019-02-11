import React, { Component } from "react";

class SearchResult extends Component {
  render() {
    const hello = () => {
      console.log("hello");
    };

    const Multi = () => {
      return this.props.result.map((movie, i) => (
        <option
          className="list-item"
          key={movie.id}
          onClick={hello}
          value={movie.id}
        >
          {movie.title} ({movie.extra})
        </option>
      ));
    };

    const None = () => <div>Sorry no matches..</div>;
    const MoreChars = () => <div>More chars plz...</div>;

    if (this.props.query.length < this.props.minChars) return <MoreChars />;
    else {
      return !this.props.result.length &&
        this.props.query.length > this.props.minChars + 1 ? (
        <None />
      ) : (
        <Dropdown result={this.props.result}>
          <Multi />
        </Dropdown>
      );
    }
  }
}

export default SearchResult;

class Dropdown extends Component {
  state = {
    hasFocus: false,
    lastSelect: ""
  };

  constructor(props) {
    super(props);
    this.refSelect = React.createRef();
  }

  handleChange = e => {
    console.log("handleChange");

    let upd = this.refSelect.current.value;
    this.setState({ lastSelect: upd });
  };

  handleClick = e => {
    console.log("handleClick", e.target, this.refSelect.current);
  };

  render() {
    // console.log('*render*',this.props.result.length);

    return (
      <select
        ref={this.refSelect}
        size="8"
        id="list-suggestions"
        onFocus={() => this.setState({ hasFocus: true })}
        onBlur={() => this.setState({ hasFocus: false })}
        value={this.state.lastSelect}
        onChange={this.handleChange}
        onClick={this.handleClick}
      >
        {this.props.children}
      </select>
    );
  }

}
