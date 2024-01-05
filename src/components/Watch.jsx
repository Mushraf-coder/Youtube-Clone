import React from "react";
import Nav from "./Nav";
import { useSearchParams } from "react-router-dom";
import WatchVideo from "./WatchVideo";

function Watch() {
  const [searchparam] = useSearchParams();
  console.log(searchparam.get("v"));
  return (
    <div className="full">
      <Nav />
      <div className="flex ">
        <div className="w-[70%] fixed top-70">
          <iframe
            width="560"
            height="315"
            className="w-[900px] h-[500px] ml-3 mt-3"
            src={
              "https://www.youtube.com/embed/" +
              searchparam.get("v") +
              "?TUN8PtDGRaA?si=cNeZAnuQHBZ0j0qE"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[30%] ml-[70%] ">
          <WatchVideo />
        </div>
      </div>
    </div>
  );
}

export default Watch;
