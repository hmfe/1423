import React from "react";
import IconCross from "../svg/iconCross";

export default function History(props) {
  const { length: total } = props.searchHistory;
  const e = stamp => {
    let d = new Date(stamp);
    return d.toLocaleString();
  };
  if (total === 0) return <div id="search-result">no search history</div>;

  return (
    <div id="search-result">
    <table className="search-history">
      <thead>
        <tr>
          <td colSpan="2">Search History</td>
          <td className="clear-all">
            <a href="#" onClick={props.onClearMovies}>Clear All</a>
          </td>
        </tr>
      </thead>
      <tbody>
        {props.searchHistory.map(movie => (
          <tr key={movie.saveTime}>
            <td>{movie.title}</td>
            <td className="time-stamp"><time>{e(movie.saveTime)}</time></td>
            <td className="delete">
              <button
                onClick={() => props.onDelMovie(movie)}
                className="button icon delete"
              >
                <IconCross width={20}/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
