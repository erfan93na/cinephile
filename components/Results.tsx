import React from "react";
import { Genre, Movie, TmdbApi } from "tmdb-typescript-api";
import Thumbnail from "./Thumbnail";
type ResultsProps = {
  results: Movie[];
};
function Results({ results }: ResultsProps) {
  return (
    <div className="px-5 my-10 flex flex-wrap">
      {results.map((result) => (
        <div className=" grow " key={result.id}>
          <Thumbnail result={result} />
        </div>
      ))}
    </div>
  );
}

export default Results;
