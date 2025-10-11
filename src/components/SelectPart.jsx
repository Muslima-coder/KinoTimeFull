import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import SelectComponent from "./SelectComponent";
import MovieCard from "./MovieCard";

const SelectPart = () => {
  const [toogle, setToogle] = useState(false);
  const [toogle2, setToogle2] = useState(false);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [genreFilter, setGenreFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);
  const [yearFilter, setYearFilter] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [audioFilter, setAudioFilter] = useState(null);
  const [subtitleFilter, setSubtitleFilter] = useState(null);


  useEffect(() => {
    fetch("https://kinotime.world/api/movies?lang=uz")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((err) => console.error("API xatosi:", err));
  }, []);

  
  useEffect(() => {
    let result = movies;

    if (genreFilter)
      result = result.filter((m) => {
        const genres = Array.isArray(m.genre)
          ? m.genre
          : typeof m.genre === "string"
          ? m.genre.split(",").map((g) => g.trim())
          : [];
        return genres.some(
          (g) => g.toLowerCase() === genreFilter.toLowerCase()
        );
      });

    if (countryFilter)
      result = result.filter((m) => {
        const countries = Array.isArray(m.country)
          ? m.country
          : typeof m.country === "string"
          ? m.country.split(",").map((c) => c.trim())
          : [];
        return countries.some(
          (c) => c.toLowerCase() === countryFilter.toLowerCase()
        );
      });

    if (yearFilter)
      result = result.filter(
        (m) => m.year?.toString() === yearFilter.toString()
      );

    if (ratingFilter)
      result = result.filter(
        (m) => parseFloat(m.imdbRating) >= parseFloat(ratingFilter)
      );

    if (audioFilter)
      result = result.filter(
        (m) => m.audio?.toLowerCase() === audioFilter.toLowerCase()
      );

    if (subtitleFilter)
      result = result.filter(
        (m) => m.subtitle?.toLowerCase() === subtitleFilter.toLowerCase()
      );

    setFilteredMovies(result);
  }, [
    genreFilter,
    countryFilter,
    yearFilter,
    ratingFilter,
    audioFilter,
    subtitleFilter,
    movies,
  ]);

  
  const genreOptions = [
    ...new Set(
      movies.flatMap((m) =>
        Array.isArray(m.genre)
          ? m.genre
          : typeof m.genre === "string"
          ? m.genre.split(",").map((g) => g.trim())
          : []
      )
    ),
  ].map((g) => ({ value: g, label: g }));

  const countryOptions = [
    ...new Set(
      movies.flatMap((m) =>
        Array.isArray(m.country)
          ? m.country
          : typeof m.country === "string"
          ? m.country.split(",").map((c) => c.trim())
          : []
      )
    ),
  ].map((c) => ({ value: c, label: c }));

  const yearOptions = [
    ...new Set(movies.map((m) => m.year?.toString()).filter(Boolean)),
  ].map((y) => ({ value: y, label: y }));

  const ratingOptions = [
    { value: 5, label: "5+" },
    { value: 6, label: "6+" },
    { value: 7, label: "7+" },
    { value: 8, label: "8+" },
    { value: 9, label: "9+" },
  ];

  const audioOptions = [
    { value: "O'zbek", label: "O'zbek" },
    { value: "Ingliz", label: "Ingliz" },
    { value: "Rus", label: "Rus" },
  ];

  const subtitleOptions = [
    { value: "O'zbek", label: "O'zbek" },
    { value: "Rus", label: "Rus" },
    { value: "Ingliz", label: "Ingliz" },
  ];

  
  const handleClearFilters = () => {
    setGenreFilter(null);
    setCountryFilter(null);
    setYearFilter(null);
    setRatingFilter(null);
    setAudioFilter(null);
    setSubtitleFilter(null);
    setFilteredMovies(movies);
    setToogle(null);
    setToogle2(null)
  };


  
  return (
    <div className="bg-[#171818]">
        <div className="bg-[#212322] p-5 rounded-lg mb-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <SelectComponent
              options={genreOptions}
              placeholder="Janr"
              value={genreFilter}
              onChange={setGenreFilter}
              isClearable
            />
            <SelectComponent
              options={countryOptions}
              placeholder="Davlat"
              value={countryFilter}
              onChange={setCountryFilter}
              isClearable
            />
            <SelectComponent
              options={yearOptions}
              placeholder="Yil"
              value={yearFilter}
              onChange={setYearFilter}
              isClearable
            />
            <SelectComponent
              options={ratingOptions}
              placeholder="Reyting"
              value={ratingFilter}
              onChange={setRatingFilter}
              isClearable
            />
            <SelectComponent
              options={audioOptions}
              placeholder="Audiotrek"
              value={audioFilter}
              onChange={setAudioFilter}
              isClearable
            />
            <SelectComponent
              options={subtitleOptions}
              placeholder="Subtitr"
              value={subtitleFilter}
              onChange={setSubtitleFilter}
              isClearable
            />
          </div>

          <div className="flex items-center gap-[20px] mb-5 mt-2">
            <button
              onClick={() => setToogle(!toogle)}
              className={`py-[7px] px-[12px] rounded-xl flex gap-[10px] items-center text-[#8f9190] cursor-pointer hover:scale-[1.08] duration-500 ${
                toogle ? "bg-[#39692d]" : "bg-[#2b2e2d]"
              }`}
            >
              {toogle ? <CloseOutlined /> : <PlusOutlined />} <span>Bepul</span>
            </button>

            <button
              onClick={() => setToogle2(!toogle2)}
              className={`py-[7px] px-[12px] rounded-xl flex gap-[10px] items-center text-[#8f9190] cursor-pointer hover:scale-[1.08] duration-500 ${
                toogle2 ? "bg-[#39692d]" : "bg-[#2b2e2d]"
              }`}
            >
              {toogle2 ? <CloseOutlined /> : <PlusOutlined />}{" "}
              <span>O'zbek tilida</span>
            </button>
          </div>

          <button
            onClick={handleClearFilters}
            className="text-[#908f8e] text-[16px] font-semibold flex items-center gap-[7px] cursor-pointer hover:text-white duration-500"
          >
            <CloseOutlined /> Filterlarni tozalash
          </button>
        </div>

        
        <div className="flex flex-wrap gap-[20px] justify-between">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((item, index) => (
               <MovieCard
                classList={"!w-[230px] !overflow-hidden"}
                key={index}
                title={item.title}
                poster={item.poster}
                year={item.year}
                imdbRating={item.imdbRating}
                genre={item.genre}
                country={item.country}
              />
            ))
          ) : (
            <p className="text-white text-center w-full py-10">
              Hech qanday film topilmadi:(
            </p>
          )}
        </div>
      </div>
  );
};

export default SelectPart;
