import React from "react";

export default function History(props) {
  const { length: total } = props.searchHistory;
  const e = stamp => {
    let d = new Date(stamp);
    return d.toLocaleString();
  };
  if (total === 0) return <div>no search history</div>;

  return (
    <table className="search-history">
      <thead>
        <tr>
          <td colSpan="2">Search History</td>
          <td>
            <button onClick={props.onClearMovies} className="clearAll">
              Clear All
            </button>
          </td>
        </tr>
      </thead>
      <tbody>
        {props.searchHistory.map(movie => (
          <tr key={movie.saveTime}>
            <td>{movie.title}</td>
            <td>{e(movie.saveTime)}</td>
            <td>
              <button
                onClick={() => props.onDelMovie(movie)}
                className="button delete"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
