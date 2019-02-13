import React, { Component, Fragment } from "react";

import Searcher from "./components/searcher/searcher";
import History from "./components/history/history";
import "./App.css";

class App extends Component {
  state = {
    searchHistory: []
  };

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
        <Searcher onAddMovie={this.handleAddMovie} />
        <History
          searchHistory={this.state.searchHistory}
          onDelMovie={this.handleDelMovie}
        />
      </Fragment>
    );
  }
}

export default App;
