import React, { Component } from 'react';
import axios from 'axios';

class Searcher extends Component {
    state = {
        error: null,
        isLoaded: false,
        result: []
    }

    async componentDidMount() {

        const apiKey = 'c857fccf3354f1ca866dc08a04b4be34';
	    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=Jack+Reacher';


        
        try {
            let data = await this.getJson(url);
            this.setState({ isLoaded: true, result:data.results });            
        }
        catch(error){
            this.setState({
                isLoaded: true,
                error
            })
			console.log('There has been a problem with your fetch operation: ', error.message);
		};
        
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('should ud', nextState);
        return true
      }

      componentDidCatch()
      {
          console.log( 'componentDidCatch');
      }

    async getJson(url) {
        let res = await axios.get(url);

        if (res.status === 200) {
            let json = await res.data;
            return json;
        }

        throw new Error(res.status);
    }

    render() { 
        console.log( 'render');
        const { error, isLoaded, result } = this.state;
        
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
        return (
            <ul>
              { this.state.result.map(movie => <li key={movie.id}>{movie.title}</li>)}
            </ul>
          )
        }
    }
}
 
export default Searcher;