import React, { Component } from "react";
import Ul from "./ul";

const None = () => <div className="no-result">Sorry no matches..</div>;
const MoreChars = () => <div className="no-result">Morex chars plz...</div>;
const Multi = props => {
 
  // this.props.onUpdateFirstResult(this);
  return props.result.map((movie, i) => (
    <li
      aria-selected="false"
      // tabIndex={!i?"0":"-1"}
      tabIndex="0"
      role="option"
      className="list-item"
      key={movie.id}
      value={movie.id}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      pos={i}
      onClick={e => props.onQueryPostSelect(movie)}
    >
      {movie.title} ({movie.extra})
    </li>
  ));
};

class Result extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.result !== this.props.result) return true;
    else return false;
  }

  render() {
    console.log("*rendering*", this.props);

    let {
      query,
      minChars,
      result,
      onUlRef:setResultListRef,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onQueryPostSelect: handleQueryPostSelect,
      inputRef
    } = this.props;

    if (query.length < minChars) return <MoreChars />;
    else {
      if (!result.length) {
        return <None />;
      } else {
       
        return (
          <Ul result={result} setResultListRef={setResultListRef} inputRef={inputRef} onQueryPostSelect={handleQueryPostSelect}>
            <Multi
              result={result}
              onQueryPostSelect={handleQueryPostSelect}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Ul>
        );
      }
    }
  }
}

export default Result;
