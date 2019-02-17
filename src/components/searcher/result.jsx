import React, { Component } from "react";
import Ul from "./ul";

const None = () => <div className="no-result">Sorry no matches..</div>;
const MoreChars = () => <div className="no-result">Morex chars plz...</div>;
const Multi = props => {
  let query = props.inputRef.value;
  
  return props.result.map((movie, i) => (
    <li
      aria-selected="false"
      tabIndex="0"
      role="option"
      className="list-item"
      key={movie.id}
      value={movie.id}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      data-pos={i}
      data-title ={movie.title}
      onClick={e => props.onQueryPostSelect(movie)}
    >
      <b>{movie.title.substring(0,query.length)}</b>{movie.title.substring(query.length)} ({movie.extra})
    </li>

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
      onUlRef: setResultListRef,
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
          <Ul
            result={result}
            setResultListRef={setResultListRef}
            inputRef={inputRef}
            onQueryPostSelect={handleQueryPostSelect}
          >
            <Multi
              inputRef={inputRef}
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
