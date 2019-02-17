import React from "react";
import IconCross from "../svg/iconCross";

export default function History(props) {
  const { length: total } = props.searchHistory;
  const getDate = stamp => {
    let d = new Date(stamp);
    let dateonly = d.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    return dateonly;
  };
  const getTime = stamp => {
    let d = new Date(stamp);
    let timeonly = d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    return timeonly;
  };

  const getDateTime = stamp => {
    let d = new Date(stamp);
    return d;
  };

  if (total === 0) return <div id="search-result">no search history</div>;

  return (
    <div id="search-result">
      <table className="search-history">
        <thead>
          <tr>
            <td colSpan="2">Search History</td>
            <td className="clear-all">
              <a href="#/" onClick={props.onClearMovies}>
                Clear All
              </a>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.searchHistory.map(movie => (
            <tr key={movie.saveTime}>
              <td>{movie.title}</td>
              <td className="time-stamp">
                <time>{getDate(movie.saveTime)}</time>&nbsp;
                <time dateTime={getDateTime(movie.saveTime)}>{getTime(movie.saveTime)}</time>
              </td>
              <td className="delete">
                <button
                  onClick={() => props.onDelMovie(movie)}
                  className="button icon delete"
                >
                  <IconCross width={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
