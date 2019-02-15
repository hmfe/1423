import React, { Component } from "react";
import Dropdown from './dropdown';

const None = () => <div>Sorry no matches..</div>;
const MoreChars = () => <div>Morex chars plz...</div>;
const Multi = props => {

  // console.log(props);
  
  return props.result.map((movie, i) => (
    <li
     // tabIndex={!i?"0":"-1"}
      tabIndex="0"
      role="option"
      className="list-item"
      key={movie.id}
      value={movie.id}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      pos={i}
      // onClick={e => props.onQueryPostSelect(movie)}
    >
      {movie.title} ({movie.extra})
    </li>
  ));
};

class Result extends Component {
  shouldComponentUpdate(nextProps) {

    // if(nextProps.query.length < this.props.minChars)
    //   return false;

    //   console.log('abc');
      

    if (nextProps.result !== this.props.result) return true;
    else return false;
  }

  render() {
    console.log('*rendering*', this.props);
    
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
        <Dropdown result={result} onQueryPostSelect={handleQueryPostSelect}>
          <Multi result={result} onQueryPostSelect={handleQueryPostSelect} onFocus={handleFocus} onBlur={handleBlur} />
        </Dropdown>
      );
    }
  }
}

export default Result;
