import React, { useEffect, useState } from "react";
import { ytlink } from "../utils/config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  async function getVideoData() {
    const data = await fetch(ytlink);
    const json = await data.json();
    setVideos(json.items);
  }
  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-4 flex flex-wrap gap-8 justify-center items-center w-full">
      {console.log(videos)}
      {videos.map((vds) => (
        <div className="flex flex-col gap-2" key={vds.id}>
          <Link to={"/watch?v=" + vds.id}>
            <img
              className="w-[350px] h-[200px] rounded-lg  hover:duration-400 hover:rounded-3xl"
              src={vds.snippet.thumbnails.medium.url}
              alt=""
            />
          </Link>
          <div className="flex w-full h-[80px] gap-3 ">
            <img
              src={vds.snippet.thumbnails.medium.url}
              alt=""
              className="w-12 h-11 rounded-[50%]"
            />
            <div className="flex flex-col  gap-1">
            <p className="w-[280px] text-[13px]">{vds.snippet.title}</p>
            <p className="text-[12px]">{vds.snippet.channelTitle}</p>
            <p className="text-[12px]"> {vds.statistics.viewCount}  views</p>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoContainer;
