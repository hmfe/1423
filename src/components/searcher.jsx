import React, { Component } from 'react';
import axios from 'axios';

class Searcher extends Component {
    state = {  results: [] }

    componentDidMount() {

        const apiKey = 'c857fccf3354f1ca866dc08a04b4be34';
	    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=Jack+Reacher';

        axios.get(url)
          .then(res => {
            const results = res.data.results;
            this.setState({ results });
          })
      }


    render() { 
        return (
            <ul>
              { this.state.results.map(movie => <li>{movie.title}</li>)}
            </ul>
          )
    }
}
 
export default Searcher;