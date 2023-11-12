import React, { useState, useEffect } from 'react'
import { getHotAnimeList, getInfo } from '../api/api'
import { currentUrl } from '../config/defaultUrls'

import Card from './Card'

function HotAnime() {

  const [data, setData] = useState()
  const [top, setTop] = useState()
  
  const fetchList = async () => {
    const datas = await getHotAnimeList()
    console.log(datas)
    setData(datas)
    fetchTopInfo(datas[0].id)
  }

  const fetchTopInfo = async (id) => {
    const info = await getInfo(id)
    console.log(info)
    setTop(info)
  } 

  useEffect(()=> {
    fetchList()
  }, [])

  const dataList = data?.map(
  (data, i) => (
    <Card key={i} func={() => location.href = currentUrl + "stream/" + data.id} img={data.image} title={data.title}/>
  ))

  const TopHeader = () => {
    return (
      <div className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Recomended Anime</h2>
        <div className='flex flex-col md:flex-row gap-8'>
          <img src={top?.image} alt="" className='h-[60vh] w-3/4 md:w-fit md:h-[80vh] rounded-lg' />
          <div className='flex flex-col gap-3 md:mb-[20%] md:justify-center'>
            <p>{top?.releaseDate}</p>
            <h1 className='text-3xl text-gray-100 font-bold'>{top?.title}</h1>
            <p>{top?.genres.join(", ")}</p>
            <p>{top?.description}</p>
            <div className='flex gap-x-6'>
              <p>{top?.status}</p>
              <p>{top?.totalEpisodes} Episodes</p>
              <p>{top?.type}</p>
            </div>
            <button className='bg-red-500 text-white text-md font-bold p-4 rounded-lg w-fit' onClick={() => location.href = currentUrl + "stream/" + top?.id}>Watch Now</button>
          </div>
        </div>
      </div>
    ) 
  }

  return (
    <div className='flex flex-col justify-center mb-10'>
      <TopHeader/>
      <h2 className='text-2xl font-bold mb-4'>Hot Anime</h2>
      <div className='flex flex-wrap justify-center md:justify-start gap-4 w-full place-items-center'>
      { data ? dataList : <p>Loading...</p> }
      </div>
    </div>
  )
}

export default HotAnime

const dummydata = [
    {
        "id": "bleach-sennen-kessen-hen-ketsubetsu-tan",
        "title": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
        "image": "https://gogocdn.net/cover/bleach-sennen-kessen-hen-ketsubetsu-tan-1688151974.png",
        "url": "https://gogoanime.cl/category/bleach-sennen-kessen-hen-ketsubetsu-tan",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Shounen"
        ]
    },
    {
        "id": "kanojo-okarishimasu-3rd-season",
        "title": "Kanojo, Okarishimasu 3rd Season",
        "image": "https://gogocdn.net/cover/kanojo-okarishimasu-3rd-season-1688155060.png",
        "url": "https://gogoanime.cl/category/kanojo-okarishimasu-3rd-season",
        "genres": [
            "Comedy",
            "Romance",
            "Shounen"
        ]
    },
    {
        "id": "bungou-stray-dogs-5th-season",
        "title": "Bungou Stray Dogs 5th Season",
        "image": "https://gogocdn.net/cover/bungou-stray-dogs-5th-season.png",
        "url": "https://gogoanime.cl/category/bungou-stray-dogs-5th-season",
        "genres": [
            "Action",
            "Adult Cast",
            "Mystery",
            "Organized Crime",
            "Seinen",
            "Super Power",
            "Supernatural"
        ]
    },
    {
        "id": "horimiya-piece",
        "title": "Horimiya: Piece",
        "image": "https://gogocdn.net/cover/horimiya-piece.png",
        "url": "https://gogoanime.cl/category/horimiya-piece",
        "genres": [
            "Romance",
            "School",
            "Shounen"
        ]
    },
    {
        "id": "watashi-no-shiawase-na-kekkon",
        "title": "Watashi no Shiawase na Kekkon",
        "image": "https://gogocdn.net/cover/watashi-no-shiawase-na-kekkon-1688158075.png",
        "url": "https://gogoanime.cl/category/watashi-no-shiawase-na-kekkon",
        "genres": [
            "Fantasy",
            "Historical",
            "Romance"
        ]
    },
    {
        "id": "mushoku-tensei-ii-isekai-ittara-honki-dasu",
        "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
        "image": "https://gogocdn.net/cover/mushoku-tensei-ii-isekai-ittara-honki-dasu-1688156063.png",
        "url": "https://gogoanime.cl/category/mushoku-tensei-ii-isekai-ittara-honki-dasu",
        "genres": [
            "Drama",
            "Ecchi",
            "Fantasy",
            "Isekai",
            "Reincarnation"
        ]
    },
    {
        "id": "masamune-kun-no-revenge-r",
        "title": "Masamune-kun no Revenge R",
        "image": "https://gogocdn.net/cover/masamune-kun-no-revenge-r-1688155880.png",
        "url": "https://gogoanime.cl/category/masamune-kun-no-revenge-r",
        "genres": [
            "Comedy",
            "Harem",
            "Romance",
            "School",
            "Shounen"
        ]
    },
    {
        "id": "jujutsu-kaisen-tv-2nd-season",
        "title": "Jujutsu Kaisen 2nd Season",
        "image": "https://gogocdn.net/cover/jujutsu-kaisen-tv-2nd-season-1688154932.png",
        "url": "https://gogoanime.cl/category/jujutsu-kaisen-tv-2nd-season",
        "genres": [
            "Action",
            "Fantasy",
            "School",
            "Shounen"
        ]
    }
]

const dummydata2 = {
    "id": "watashi-no-shiawase-na-kekkon",
    "title": "Watashi no Shiawase na Kekkon",
    "url": "/category/watashi-no-shiawase-na-kekkon",
    "genres": [
        "Fantasy",
        "Historical",
        "Romance"
    ],
    "totalEpisodes": 4,
    "image": "https://gogocdn.net/cover/watashi-no-shiawase-na-kekkon-1688158075.png",
    "releaseDate": "2023",
    "description": "Miyo Saimori was the unfortunate child of a loveless, arranged marriage. After her mother died, her father brought in his lover and her own daughter, Kaya. From then on, Miyo's life was reduced to that of a mere servant. Even worse, while Kaya inherited the family's psychic abilities, Miyo had none—she was truly the daughter with no merit.\nAfter years of being treated like dirt, Miyo has learned to keep her head down, hide her pain, and obey every order. So, it comes as no surprise that she is arranged to be married to Kiyoka Kudou, a military captain rumored to be so cruel that he has driven away every one of his potential wives so far.\nFrom a painful upbringing to a painful marriage, that's the future that awaits Miyo—or so she thinks. Contrary to her expectations, her new husband is actually kind-hearted. What really awaits Miyo is a blissful, everlasting marriage full of happiness!",
    "subOrDub": "sub",
    "type": "SUMMER 2023 ANIME",
    "status": "Ongoing",
    "otherName": "わたしの幸せな結婚 / わたしのしあわせなけっこん / My Happy Marriage / My Blissful Marriage / Moje szczęśliwe małżeństwo",
    "episodes": [
        {
            "id": "watashi-no-shiawase-na-kekkon-episode-1",
            "number": 1,
            "url": "https://gogoanimehd.to//watashi-no-shiawase-na-kekkon-episode-1"
        },
        {
            "id": "watashi-no-shiawase-na-kekkon-episode-2",
            "number": 2,
            "url": "https://gogoanimehd.to//watashi-no-shiawase-na-kekkon-episode-2"
        },
        {
            "id": "watashi-no-shiawase-na-kekkon-episode-3",
            "number": 3,
            "url": "https://gogoanimehd.to//watashi-no-shiawase-na-kekkon-episode-3"
        },
        {
            "id": "watashi-no-shiawase-na-kekkon-episode-4",
            "number": 4,
            "url": "https://gogoanimehd.to//watashi-no-shiawase-na-kekkon-episode-4"
        }
    ]
}