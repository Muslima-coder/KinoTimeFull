import { useEffect, useState } from "react";
import { CancelIcon } from "../../assets/icons";
import { MovieCardSearch } from "../../components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SearchPage = () => {
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://kinotime.world/api/search/top?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data);
        setAllMovies(data.movies || []);
        setMovies(data.movies || []);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  // search function
   const handleChange = (e) => {
    const value = e.target.value
    setSearchValue(value);

    if (value.trim() === "") {
      setMovies(allMovies);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      const filtered = allMovies.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setMovies(filtered);
    }
  };


  return (
    <div className="h-[600px] px-[35px] flex flex-col justify-center items-center py-[20px] bg-[rgb(23,24,24)]">
      {/* search input */}
      <label className="flex items-center justify-between w-full mx-auto py-[16px] px-[24px] rounded-[8px] bg-[rgb(29,31,30)]">
        <input autoComplete="off" className="searchInput outline-none text-[16px] text-[rgb(255,255,255)] border-none bg-transparent flex-1" type="text" name="search" placeholder="Filmlar va seriallar" value={searchValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <CancelIcon />
      </label>

      <div className="mt-5 w-full ">
        <strong className="text-start  text-white">
          Ko'p qidirilganlar
        </strong>

        {/* Swiper */}
        {/* <Swiper
          spaceBetween={10}
          slidesPerView={6}
          navigation
          mousewheel
          cssMode
          modules={[Navigation]}
          breakpoints={{
            200: { slidesPerView: 1 },
            350: { slidesPerView: 2 },
            450: { slidesPerView: 3 },
            550: { slidesPerView: 4 },
            650: { slidesPerView: 5 },
            750: { slidesPerView: 6 },
          }}   >

          {movies.map((movie) => (
            <SwiperSlide  key={movie.id}>
              <MovieCardSearch
                title={movie.title}
                poster={movie.poster}
                year={movie.year}
                imdbRating={movie.imdbRating}
                genre={movie.genre}
                country={movie.country}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
  spaceBetween={20} // 10 o‘rniga 20px joy qildik
  slidesPerView={6}
  navigation
  mousewheel
  cssMode
  modules={[Navigation]}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 12 },    // telefon
    480: { slidesPerView: 2, spaceBetween: 15 },  // kichik planshet
    640: { slidesPerView: 3, spaceBetween: 18 },  // o‘rta planshet
    768: { slidesPerView: 4, spaceBetween: 20 },  // planshet
    1024: { slidesPerView: 5, spaceBetween: 24 }, // katta ekran
    1280: { slidesPerView: 6, spaceBetween: 28 }, // desktop
  }}
  className="!w-full"
>
  {movies.map((movie) => (
    <SwiperSlide key={movie.id}>
      <div className="flex justify-center">
        <MovieCardSearch
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          imdbRating={movie.imdbRating}
          genre={movie.genre}
          country={movie.country}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default SearchPage;
