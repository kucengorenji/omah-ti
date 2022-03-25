import Jumbotron from '../components/homepage-component/Jumbotron';
import NewHighlight from '../components/homepage-component/NewHighligt';
import Popular from '../components/homepage-component/Popular';
import { getTribunNews } from '../services/api';
import { useEffect, useState } from 'react';

const ConsumeApi = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    getTribunNews().then((res) => {
      setNews(res.data.data);
    });
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 min-h-screen">
        <h1 className="text-center text-4xl m-9">
          Current News From tribun news
        </h1>
        <table className="table-auto text-center mx-auto my-9">
          <thead className="bg-gray-700 text-white text-xl font-semibold ">
            <tr className="">
              <th className="p-4"></th>
              <th className="p-4">Judul</th>
              <th className="p-4">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {news.slice(0, 7).map((item, index) => {
              return (
                <tr key={index} className="my-4 flex-auto">
                  <td className="">
                    <img src={item.image} className="max-w-[300px]  m-3" />
                  </td>
                  <td className="text-left ml-2">{item.title}</td>
                  <td className="">{item.isoDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConsumeApi;
