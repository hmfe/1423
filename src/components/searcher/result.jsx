import React, { Component } from "react";

const None = () => <div>Sorry no matches..</div>;
const MoreChars = () => <div>Morex chars plz...</div>;
const Multi = props => {
  return props.result.map((movie, i) => (
    <option className="list-item" key={movie.id} value={movie.id} onClick={(e)=>{props.handleQueryPostSelect(movie.title);
    }}>
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
      handleBlur,
      handleFocus,
      handleQueryPostSelect
    } = this.props;

    if (query.length < minChars) return <MoreChars />;
    else {
      return !result.length ? (
        <None />
      ) : (
        <Dropdown
          result={result}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          
        >
          <Multi result={result} handleQueryPostSelect={handleQueryPostSelect}/>
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
    console.log("handleChange");

    let upd = e.target.value;
    // this.props.handleQueryPostSelect(e.target.children);
    this.setState({ lastSelect: upd });
  };

  handleBlur = e => {
    console.log("handleBlur from child");
    this.props.handleBlur(e);
    this.setState({ hasFocus: false });
  };

  handleFocus = e => {
    console.log("handleFocus from child");
    e.target.focus();
    this.props.handleFocus(e);
    this.setState({ hasFocus: true });
  };

  render() {
    // console.log('*render*',this.props.result.length);

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
