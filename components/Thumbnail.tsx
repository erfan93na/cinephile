import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { Movie } from "tmdb-typescript-api";

function Thumbnail({ result }: { result: Movie }) {
  return (
    <div className="p-2 group cursor-pointer transition-all sm:hover:scale-105">
    <Image
        layout="responsive"
        src={`/filmposter.jpg`}
        height={1080}
        width={1920}
        alt={result.title}
      />
      <div className="p-2 group">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title}
        </h2>
        <div className="flex items-center opacity-0 group-hover:opacity-100">
          <p>{result.release_date as any}</p>

          <ThumbUpIcon className="h-5  mx-2" />
          {result.vote_count}
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
