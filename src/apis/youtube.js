import axios from 'axios'
const KEY ='AIzaSyBzM-ZRKjsKhln0_cQJNN01e8njXECKGFc';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults: 5,
        key: KEY,
    }
})