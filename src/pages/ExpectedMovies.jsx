import React, { useEffect, useState } from "react";
import "../style/ExpectedMovies.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; 
import { MovieCard } from "../components";

export default function ContentList() {
  const [lists, setLists] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://kinotime.world/api/contentList?lang=uzb")
      .then(res => res.json())
      .then(async contentLists => {
        setLists(contentLists);

        const allData = {};
        for (let list of contentLists) {
          const res = await fetch(`https://kinotime.world/api/contentList/${list.id}`);
          const details = await res.json();
          allData[list.id] = details.movies;
        }
        setData(allData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="content-wrapper">
      {lists.map(list => (
        <div key={list.id} className="content-section text-[#fff] font-black">
          <h3>{list.name}</h3>
          <Swiper
            spaceBetween={20}
            slidesPerView={0}
            navigation
            modules={[Navigation]}
            breakpoints={{
              300: { slidesPerView: 1 },
              440: { slidesPerView: 2 },
              708: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1000: { slidesPerView: 5 },
              1100: { slidesPerView: 6 },
            }}
          >
            {(data[list.id] || []).map(movie => (
              <SwiperSlide key={movie.id}>
                <MovieCard {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
