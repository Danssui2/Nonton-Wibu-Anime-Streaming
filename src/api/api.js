import axios from "axios"
import { currentApi, currentUrl } from '../config/defaultUrls'

export const getHotAnimeList = async () => {

  const url = currentApi + "anime/gogoanime/top-airing"

  const data = await axios.get(url)
  .then(res => {
    console.log(res)
    return res.data.results
  })
  .catch(err => console.log(err))

  return data
}

export const search = async ( query ) => {

  const url = currentApi + "anime/gogoanime/" + query

  const data = await axios.get(url)
  .then((res) => {
    console.log(res)
    //return "Not Found"
    if (res.data.results == Array.length < 1) {
      return null
    } else {
      return res?.data
    }
  })
  .catch((err) => console.log(err))

  return data
}

export const getInfo = async ( params ) => {

  const url = "https://api.consumet.org/anime/gogoanime/info/" + params;

  const data = await axios.get(url)
  .then((res) => {
    console.log(res)
    return res.data
  })
  .catch((err) => console.log(err))
  return data
}

export const getWatch = async ( eps ) => {

  const urlWatch = "https://api.consumet.org/anime/gogoanime/watch/" + eps

  const data = await axios.get(urlWatch)
  .then((res) => {
    console.log(res)
    return res.data
  })
  .catch((err) => console.log(err))
  return data
}