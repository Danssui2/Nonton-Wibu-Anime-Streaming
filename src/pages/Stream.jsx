import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getInfo, getWatch } from "../api/api";

import preload from '../assets/preload.jpg'

function Stream() {
  const [data, setData] = useState();
  const [eps, setEps] = useState();
  const [reso, setReso] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [video, setVideo] = useState();

  const [selectedEpsBtn, setSelectedEpsBtn] = useState("");
  const [selectedResBtn, setSelectedResBtn] = useState("");

  const params = useParams();

  const fetchInfo = async () => {
    const datas = await getInfo(params.id)
    //const datas = data
    setData(datas)
    const totalEps = datas?.episodes?.length
    setEps(datas?.episodes[totalEps-1]?.id)
  }
  const fetchWatch = async () => {
    const datas = await getWatch(eps)
    setReso(datas);
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const epsList = data?.episodes?.map((currdata, i) => (
    <button
      key={i}
      className={`btn-eps btn-${i} ${selectedEpsBtn == "btn-"+i ? "btn-eps-active" : null}`}
      onClick={(e) => {
        setReso([])
        setVideoUrl()
        setEps(currdata?.id)
        fetchWatch()
        setSelectedEpsBtn((e?.currentTarget?.className.split(" ")[1]))
      }}
    >
      {currdata?.number}
    </button>
  ));

  const resolution = reso?.sources?.map((res, i) => (
    <button 
      key={i} 
      className={`btn-eps res-${i} ${selectedResBtn == "res-"+i ? "btn-eps-active" : null}`} 
      onClick={(e) => {
        setVideoUrl(res)
        setSelectedResBtn((e?.currentTarget?.className.split(" ")[1]))
      }}
    >
      {res?.quality}
    </button>
  ))

  const Content = () => {
    return (
      <div className="flex flex-col items-center">
        { video?.url ? 
          <div className="w-full h-screen flex items-center justify-center p-4">
            <ReactPlayer
              url={video?.url}
              controls={true}
              width="auto"
              height="90%"
            />
          </div> : null
        }
        <div className='flex flex-col md:flex-row mt-10 px-10 mb-20 gap-8'>
          <img src={data?.image} alt="" className='h-[80vh] rounded-lg' />
          <div className='flex flex-col gap-3 h-full'>
            <p>{data?.releaseDate}</p>
            <h1 className='text-3xl text-gray-100 font-bold'>{data?.title}</h1>
            <p>{data?.genres.join(", ")}</p>
            <p>{data?.description}</p>
            <div className='flex gap-x-6'>
              <p>Status: {data?.status}</p>
              <p>Episodes: {data?.totalEpisodes}</p>
              <p>Type: {data?.type}</p>
            </div>
            <h2>Select Episodes :</h2>
            <div className="flex p-2 border border-gray-800 gap-4 flex-wrap h-[30vh] w-fit overflow-y-auto">{epsList}</div>
            {resolution ? 
              <div>
                <h2>Select Resolution :</h2>
                <div className="flex gap-4 mt-2 flex-wrap">{resolution}</div>
              </div> : null
            }
            { videoUrl ? 
              <div className="flex gap-4">
                <button className='bg-red-500 text-white text-md font-bold p-4 rounded-lg w-fit' onClick={() => setVideo(videoUrl)}>Watch Now</button>
                <button className='bg-red-500 text-white text-md font-bold p-4 rounded-lg w-fit' onClick={() => location.href = reso?.download}>Download</button>
              </div>
             : null }
          </div>
        </div>
      </div>
    ) 
  }

  return (
    <div className="flex justify-center items-center">
      {data ?<Content/> : <p className="mt-20">Loading...</p>}
    </div>
  );
}

const dummydata = {
  id: "bleach-sennen-kessen-hen-ketsubetsu-tan",
  title: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
  url: "/category/bleach-sennen-kessen-hen-ketsubetsu-tan",
  genres: ["Action", "Adventure", "Fantasy", "Shounen"],
  totalEpisodes: 3,
  image:
    "https://gogocdn.net/cover/bleach-sennen-kessen-hen-ketsubetsu-tan-1688151974.png",
  releaseDate: "2023",
  description:
    "With the secrets of his past and power finally revealed to him, Ichigo has reforged his Zanpakuto, and can now continue his training under the Zero Squad. However, time is not on his side; Ywach and his assembled Sternritter are on the warpath once more, ready to finish their destruction of Soul Society and complete their millennium-long vengeance. What's more, their ranks have grown, with Uryu Ishida joining his fellow Quincy in their blood war. When the fates of every soul in the universe are at stake, Ichigo must find the the strength to take on his own friend.",
  subOrDub: "sub",
  type: "SUMMER 2023 ANIME",
  status: "Ongoing",
  otherName:
    "BLEACH 千年血戦篇-訣別譚- / Bleach: Thousand-Year Blood War - The Separation / Bleach: Thousand-Year Blood War Arc",
  episodes: [
    {
      id: "bleach-sennen-kessen-hen-ketsubetsu-tan-episode-1",
      number: 1,
      url: "https://gogoanimehd.to//bleach-sennen-kessen-hen-ketsubetsu-tan-episode-1",
    },
    {
      id: "bleach-sennen-kessen-hen-ketsubetsu-tan-episode-2",
      number: 2,
      url: "https://gogoanimehd.to//bleach-sennen-kessen-hen-ketsubetsu-tan-episode-2",
    },
    {
      id: "bleach-sennen-kessen-hen-ketsubetsu-tan-episode-3",
      number: 3,
      url: "https://gogoanimehd.to//bleach-sennen-kessen-hen-ketsubetsu-tan-episode-3",
    },
  ],
};

const dummydata2 = {
  headers: {
    Referer:
      "https://gotaku1.com/embedplus?id=MjA3MzM4&token=E1hV-n5Y9lWdp0yRjRHMOQ&expires=1690371730",
  },
  sources: [
    {
      url: "https://www049.vipanicdn.net/streamhls/7b066f15c6467742a9e0ea2efe3c8132/ep.1.1688229204.360.m3u8",
      isM3U8: true,
      quality: "360p",
    },
    {
      url: "https://www049.vipanicdn.net/streamhls/7b066f15c6467742a9e0ea2efe3c8132/ep.1.1688229204.480.m3u8",
      isM3U8: true,
      quality: "480p",
    },
    {
      url: "https://www049.vipanicdn.net/streamhls/7b066f15c6467742a9e0ea2efe3c8132/ep.1.1688229204.720.m3u8",
      isM3U8: true,
      quality: "720p",
    },
    {
      url: "https://www049.vipanicdn.net/streamhls/7b066f15c6467742a9e0ea2efe3c8132/ep.1.1688229204.1080.m3u8",
      isM3U8: true,
      quality: "1080p",
    },
    {
      url: "https://www049.vipanicdn.net/streamhls/7b066f15c6467742a9e0ea2efe3c8132/ep.1.1688229204.m3u8",
      isM3U8: true,
      quality: "default",
    },
    {
      url: "https://www049.anifastcdn.info/videos/hls/H2Gqo9fSjvww73QXOV6slA/1690378931/207338/7b066f15c6467742a9e0ea2efe3c8132/ep.1.1688229204.m3u8",
      isM3U8: true,
      quality: "backup",
    },
  ],
  download:
    "https://gogohd.net/download?id=MjA3MzM4&token=E1hV-n5Y9lWdp0yRjRHMOQ&expires=1690371730",
};

export default Stream;
