
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetData = () => {
  const navigate = useNavigate();
  const [moviedata, setMovieData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const data = await response.json();
    setMovieData(data);
    console.log(data);
  }

  function moviehandler(e) {
    navigate('/moviedetail/' + e);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
      {moviedata?.map((data, index) => (
        data.show.image?.original === undefined ? (
          ''
        ) : (
          <div
            key={index}
            className="mb-4 flex flex-col items-center transform transition-all ease-in-out hover:scale-105"
          >
            <img
              src={data.show.image?.original}
              alt=""
              className="w-full h-90 md:w-auto md:h-80 object-cover rounded-lg border border-red-500"
            />
            <button
              onClick={() => moviehandler(data.show.id)}
              className="bg-black text-orange-600 px-4 py-2 rounded-md mt-2"
            >
              About Movie
            </button>
          </div>
        )
      ))}
    </div>
  );
};

export default GetData;
