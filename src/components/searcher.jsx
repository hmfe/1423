import React, { Component, Fragment } from "react";
import axios from "axios";
import SearchResult from "./searchResult";

class Searcher extends Component {
  state = {
    error: null,
    isLoaded: false,
    result: [],
    lastquery: "",
    minChars: 1,
    inputActive: false,
    focusDD: false
  };

  async componentDidMount() {
    const apiKey = "c857fccf3354f1ca866dc08a04b4be34";
    this.url = "https://api.themoviedb.org/4/search/movie?api_key=" + apiKey;
    await this.getSearch("testquery");
  }

    extractDetails(arr) {
        
        let filtered = this.filterRegMatch(arr);
        
        return filtered.map( pos => {
            const { id, title, release_date } = pos;
            return { id: id, title: title, extra: release_date };
        });
    }

    filterRegMatch(arr) {
        let { lastquery } = this.state;
        let regex = new RegExp(`\\b^${lastquery}`, 'gi');
        let filtered = arr.filter(function (pos) {
            return regex.test(pos.title);
        });
        return filtered;
    }

  async getSearch(query) {
    try {
      let data = await this.getJson(this.url + "&query=" + query + "&include_adult=false&sort_by=title.asc");
    
      const r =
        query === "testquery"
          ? { isLoaded: true }
          : { isLoaded: true, result: this.extractDetails(data.results) };
      this.setState(r);
    } catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    }
  }

  async getJson(url) {
    let res = await axios.get(url);

    if (res.status === 200) {
      let json = await res.data;
      return json;
    }

    throw new Error(res.status);
  }

  handleChange = e => {
    // console.log(document.getElementById("list-suggestions"))
    if(e.target.value === ' ')
    {
        e.target.value = '';
        return false;
    }
    this.setState({ inputActive: true, lastquery: e.target.value });

    if (e.target.value.length >= this.state.minChars) {
      this.resetTimer(200, e.target.value);
    } else {
      clearTimeout(this.searchTimeout);
      this.setState({ result: [] });
    }
  };

  handleBlur = e => {
    // document.getElementById("list-suggestions").focus();
   
    this.setState({ inputActive: false });
  };

  resetTimer(ms, inputString) {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(async () => {
      await this.getSearch(inputString);
      this.setState({ lastquery: inputString });
    }, ms);
  }

  render() {
    // console.log("** render() **");
    const { error, result, lastquery, minChars, focusDD } = this.state;

    if (error) {
      return <div>Sorry, search is not possible: {error.message}</div>;
    } else {
    //   if (!this.state.inputActive) {
    //     return (
    //       <Fragment>
    //         <input onFocus={this.handleChange} onBlur={this.handleBlur}  />
    //       </Fragment>
    //     );
    //   }
      return (
        <Fragment>
          <input onChange={this.handleChange} onBlur={this.handleBlur} />
          <SearchResult query={lastquery} minChars={minChars} result={result} focus={focusDD}  />
        </Fragment>
      );
    }
  }
}

export default Searcher;
