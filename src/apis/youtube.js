import axios from 'axios';

const KEY = 'AIzaSyCRFqQdEo93sTp3E1fkYmb-iuUPtx-t2U4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
