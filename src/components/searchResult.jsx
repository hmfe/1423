import * as React from 'react';

const SearchResult = (props) => {
    
    const hello = () =>{ console.log('hello');
    }
    const Multi = () => {
        return (
          <ul className='list-suggestions'>
          { props.result.map(movie => <li className='list-item' key={movie.id} tabIndex="0" onClick={hello}>{movie.title} ({movie.extra})</li>)}
          </ul>
        )
      }
    const None = () => <div>Sorry no matches..</div>;
    const MoreChars = () => <div>More chars plz...</div>;
      
    if (props.query.length < props.minChars) return <MoreChars />
    else{
        return  !props.result.length && props.query.length>props.minChars+1? <None />:<Multi />
    }
};

export default SearchResult;

