import {  useState } from "react";
import { CancelIcon, TvPartSelectIcon1, TvPartSelectIcon2 } from "../../assets/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TvPart = () => {
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [searchBtn, setSearchBtn] = useState(false)

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

  // searchdagi text contentlar
  const SearchTextBtn = ({title}) => {
    return(
      <button onClick={() => setSearchBtn(!searchBtn)} className={searchBtn ? "text-white bg-[#52b038] py-2 px-7 rounded-full cursor-pointer duration-400 transition-all" : "text-[#9c9d9d] bg-[#1e1f1f]  hover:brightness-150 py-2 px-7 rounded-full cursor-pointer duration-400 transition-all"}>{title}</button>
    )
  }

  //btnla contenti
  const BtnContent = ({title, icon}) => {
    return(
      <button className="flex items-center gap-5 bg-[#232424] text-[#fffffe] px-7 cursor-pointer duration-500 hover:bg-[#1a201a] py-[16px] rounded-[8px]">
        {icon}
        <div className="xl:flex hidden">{title}</div>
      </button>
    )
  }


  return (
    <div className="pt-25 px-3  py-[20px] bg-[rgb(23,24,24)]">
      <div className="containers relative">
        <div className="flex flex-col gap-[10px] mb-[15px]">
        <p className="text-[18px] font-semibold text-white mb-[8px]">
          Bosh sahifa / <span className="!text-[#8b8c8c]">Telekanallar</span>
        </p>
        <h2 className="md:text-[64px] text-[22px] font-bold text-white">Telekanallar</h2>
      </div>
      {/* search input */}
       <div className="xl:w-[68%] w-full ">
         <label className="flex items-center justify-between mx-auto py-[16px] px-[24px] rounded-[8px] bg-[#232424]">
          <input autoComplete="off" className="searchInput outline-none text-[16px] text-[rgb(255,255,255)] border-none bg-transparent flex-1" type="text" name="search" placeholder="Tv kanal nomini kiriting" value={searchValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
          <CancelIcon />
        </label>
       </div>

        <div className="absolute xl:top-39 md:top-15 top-8 right-0 flex items-center gap-[30px]">
        <BtnContent icon={<TvPartSelectIcon1/>} title={"Kanal ro'yxati"}/>
        <BtnContent icon={<TvPartSelectIcon2/>} title={"Radio"}/>
        </div>


      <div className="mt-5 w-full ">
        {/* Swiper */}
        <Swiper
          spaceBetween={10}
          slidesPerView={10}
          navigation
          mousewheel
          cssMode
          modules={[Navigation]}
          >
        <div className="flex items-center gap-[20px] p-2">
        <SwiperSlide>
          <SearchTextBtn title={"salom alik"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SearchTextBtn title={"qale"}/>
        </SwiperSlide>
        </div>
            
        </Swiper>
      </div>
      </div>
    </div>
  );
};

export default TvPart;

