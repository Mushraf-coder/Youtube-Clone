import React, { useEffect, useState } from "react";
import { ytlink } from "../utils/config";
import { Link } from "react-router-dom";

function WatchVideo() {
  const [vid, setVid] = useState([]);
  useEffect(() => {
    getVidData();
  }, []);
  async function getVidData() {
    const data = await fetch(ytlink);
    const byson = await data.json();
    setVid(byson.items);
  }

  return (
    <div className="mt-4 flex  flex-col flex-wrap gap-3 w-full ">
      {console.log(vid)}
      {vid.map((vds) => (
        <Link to={"/watch?v=" + vds.id}>
          <div className="flex justify-center items-center gap-4" key={vds.id}>
            <img
              className="w-[210px] h-[100px] rounded-lg  hover:duration-400 hover:rounded-3xl"
              src={vds.snippet.thumbnails.medium.url}
              alt=""
            />

            <p className="w-[200px] text-[13px]">{vds.snippet.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WatchVideo;
