import React, { Component, Fragment } from "react";

import Searcher from "./components/searcher/searcher";
import History from "./components/history/history";
import "./App.css";

class App extends Component {
  state = {
    searchHistory: []
  };

  handleClearMovies = (e) => {
    e.preventDefault();
    this.setState({ searchHistory: [] });
  }
  handleAddMovie = m => {
  
    let arr = [m, ...this.state.searchHistory];
    this.setState({ searchHistory: arr });
  };
  handleDelMovie = movieFromButton => {

    const keepMovies = this.state.searchHistory.filter(
      m => (m.saveTime !== movieFromButton.saveTime)
    );

    this.setState({ searchHistory: keepMovies });
  };

  render() {
    return (
      <Fragment>
        
        <History
          searchHistory={this.state.searchHistory}
          onDelMovie={this.handleDelMovie}
          onClearMovies={this.handleClearMovies}
        />

        <Searcher onAddMovie={this.handleAddMovie} />
      </Fragment>
    );
  }
}

export default App;
