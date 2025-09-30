import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import SelectComponent from "./SelectComponent"

const SelectPart = () => {
  const [toogle, setToogle] = useState(false)
  const [toogle2, setToogle2] = useState(false)

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
      .catch((err) => console.error(err));
  }, []);
  console.log(movies);
  

   useEffect(() => {
    let result = movies;

    if (genreFilter) result = result.filter((m) => m.genre === genreFilter.value);
    if (countryFilter) result = result.filter((m) => m.country === countryFilter.value);
    if (yearFilter) result = result.filter((m) => m.year.toString() === yearFilter.value);
    if (ratingFilter) result = result.filter((m) => m.imdbRating >= ratingFilter.value);
    if (audioFilter) result = result.filter((m) => m.audio === audioFilter.value);
    if (subtitleFilter) result = result.filter((m) => m.subtitle === subtitleFilter.value);

    setFilteredMovies(result);
  }, [genreFilter, countryFilter, yearFilter, ratingFilter, audioFilter, subtitleFilter, movies]);

    // Dropdown options
  const genreOptions = [...new Set(movies.map((m) => m.genre))].map((g) => ({ value: g, label: g }));
  const countryOptions = [...new Set(movies.map((m) => m.country))].map((c) => ({ value: c, label: c }));
  const yearOptions = [...new Set(movies.map((m) => m.year))].map((y) => ({ value: y.toString(), label: y.toString() }));
  const ratingOptions = [
    { value: "iMDB", label: "iMDB" },
    { value: "KinoPoisk", label: "KinoPoisk" },
    { value: "iTV", label: "iTV" },
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
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: 150,
      borderRadius: 8,
      borderColor: "#888",
      boxShadow: "none",
      height: 40,
    }),
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
  };


  return (
    <div className="bg-[#171818] p-5">
      <div className="containers">
          <div className="flex flex-col gap-[10px] mb-[15px]">
            <h2 className="text-[64px] font-bold text-white mb-[10px]">Filmlar</h2>
            <p className="text-[18px] font-semibold text-white">Bosh sahifa / <span className="!text-[#8b8c8c] ">Filmlar</span></p>
        </div>

        <div className="bg-[#212322] p-5  rounded-lg mb-5">
          <div className="flex flex-wrap items-center justify-between">
            <SelectComponent options={genreOptions} placeholder="Janr" value={genreFilter} onChange={setGenreFilter} isClearable styles={selectStyles} />
            <SelectComponent options={countryOptions} placeholder="Davlat" value={countryFilter} onChange={setCountryFilter} isClearable styles={selectStyles} />
            <SelectComponent options={yearOptions} placeholder="Yil" value={yearFilter} onChange={setYearFilter} isClearable styles={selectStyles} />
            <SelectComponent options={ratingOptions} placeholder="Reyting" value={ratingFilter} onChange={setRatingFilter} isClearable styles={selectStyles} />
            <SelectComponent options={audioOptions} placeholder="Audiotrek" value={audioFilter} onChange={setAudioFilter} isClearable styles={selectStyles} />
            <SelectComponent options={subtitleOptions} placeholder="Subtitr" value={subtitleFilter} onChange={setSubtitleFilter} isClearable styles={selectStyles} />
          </div>

          <div className="flex items-center gap-[20px] mb-5 mt-2">
              <button  onClick={() => setToogle(!toogle)} className={`py-[7px] hover:scale-[1.08] duration-500 px-[12px] justify-center border-none rounded-xl flex !gap-[10px] items-center  text-[#8f9190] cursor-pointer ${
                toogle ? "bg-[#39692d]" : "bg-[#2b2e2d]"}`}  >
              <span  className={`transition-transform duration-500 inline-block ${
              toogle ? "rotate-180" : "rotate-0" }`} >{toogle ? <CloseOutlined /> : <PlusOutlined />} </span>
              <span>Bepul</span>
              </button>

              <button  onClick={() => setToogle2(!toogle2)} className={`py-[7px] hover:scale-[1.08] duration-500 px-[12px] justify-center border-none rounded-xl flex !gap-[10px] items-center  text-[#8f9190] cursor-pointer ${
                toogle2 ? "bg-[#39692d]" : "bg-[#2b2e2d]"}`}  >
              <span  className={`transition-transform duration-500 inline-block ${
              toogle2 ? "rotate-180" : "rotate-0" }`} >{toogle2 ? <CloseOutlined /> : <PlusOutlined />} </span>
              <span>O'zbek tilida</span>
          
              </button>
          </div>
          <button onClick={handleClearFilters} className="text-[#908f8e] text-[16px] font-semibold flex items-center gap-[7px] cursor-pointer hover:text-white duration-500"><CloseOutlined /> Filterlarni tozalash</button>
        </div>

        <div className="flex items-center flex-wrap gap-[20px] justify-between">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "200px",
                padding: "10px",
              }}
            >
              <img
                src={`https://kinotime.world${movie.poster}`}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "4px" }}
              />
              <h3>{movie.title}</h3>
              <p>Janr: {movie.genre}</p>
              <p>Davlat: {movie.country}</p>
              <p>Yil: {movie.year}</p>
              <p>IMDB: {movie.imdbRating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default SelectPart
