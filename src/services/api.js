import axios from 'axios';

const baseUrl = 'http://berita-indo-api.vercel.app';

export const getTribunNews = async () => {
  const response = await axios.get(`${baseUrl}/v1/tribun-news/`);
  return response;
};
