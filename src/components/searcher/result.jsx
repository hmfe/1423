import React, { Component } from "react";

const None = () => <div>Sorry no matches..</div>;
const MoreChars = () => <div>Morex chars plz...</div>;
const Multi = props => {
  return props.result.map((movie, i) => (
    <option
      className="list-item"
      key={movie.id}
      value={movie.id}
      onClick={e => props.onQueryPostSelect(movie)}
    >
      {movie.title} ({movie.extra})
    </option>
  ));
};

class Result extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.result !== this.props.result) return true;
    else return false;
  }

  render() {
    let {
      query,
      minChars,
      result,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onQueryPostSelect: handleQueryPostSelect
    } = this.props;

    if (query.length < minChars) return <MoreChars />;
    else {
      return !result.length ? (
        <None />
      ) : (
        <Dropdown result={result} onBlur={handleBlur} onFocus={handleFocus}>
          <Multi result={result} onQueryPostSelect={handleQueryPostSelect} />
        </Dropdown>
      );
    }
  }
}

export default Result;

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
