import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [moviedetail, setMovieDetail] = useState({});
  
  useEffect(() => {
    getmoviedetails(id);
  }, [id]);

  async function getmoviedetails(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    setMovieDetail(data);
    console.log(data);
  }

  const movie = [];
  movie.push(moviedetail);

  return (
    <div className='h-screen flex justify-center items-center'>
      {movie.map((data, indx) => (
        <div key={indx} className='flex flex-col md:flex-row justify-between items-center w-full md:w-3/4'>
          <div className='w-full md:w-2/5 mb-4 md:mb-0'>
            <img
              src={data.image?.original}
              alt=""
              className="object-contain rounded-md border-solid border-2 border-red-500 w-full h-s md:w-full md:h-full"
            />
          </div>
          <div className='w-full h-40 md:w-50 ml-0 md:ml-4'>
            <h1 className="text-xl font-bold mb-2 md:mb-4">Moviename: <span className='font-light'>{data.name}</span></h1>
            <h1 className='text-xl font-bold mb-2 md:mb-4'>Movie Summary: <p className='text-xl font-light' dangerouslySetInnerHTML={{ __html: data.summary }}></p></h1>
            <h1 className="text-xl font-bold mb-2 md:mb-4">Language: <span className='font-light'>{data.language}</span></h1>
            <h1 className="text-xl font-bold mb-2 md:mb-4">Movie Rating: {data.rating?.average === null ? <span className='text-black'>7.8</span> : <span className='font-light'>{data.rating?.average}</span>}</h1>
            <h1 className="text-xl font-bold mb-2 md:mb-4">Genres: <span className='font-light'>{data?.genres?.map((data, key) => (
              <span key={key}>{data}</span>
            ))}</span></h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
