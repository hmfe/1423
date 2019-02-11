import React, { Component } from "react";

const None = () => <div>Sorry no matches..</div>;
const MoreChars = () => <div>Morex chars plz...</div>;
const Multi = props => {
  return props.result.map((movie, i) => (
    <option className="list-item" key={movie.id} value={movie.id}>
      {movie.title} ({movie.extra})
    </option>
  ));
};

class SearchResult extends Component {
  render() {
    let { query, minChars, result } = this.props;

    if (query.length < minChars) return <MoreChars />;
    else {
      return !result.length && query.length > minChars + 1 ? (
        <None />
      ) : (
        <Dropdown result={result}>
          <Multi result={result} />
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

  handleChange = e => {
    console.log("handleChange");

    let upd = e.target.value;
    this.setState({ lastSelect: upd });
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
      >
        {this.props.children}
      </select>
    );
  }
}
