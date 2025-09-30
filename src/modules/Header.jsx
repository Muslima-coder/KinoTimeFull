import { useState } from "react";
import { SearchSvg, PromocodIcon, NotificationIcon, RegisterIcon } from '../assets/icons'
import { SiteLogoFooter } from '../assets/images'
import { NavLink, useNavigate } from "react-router-dom";
import { ModalHeader } from "../components";

function Header() {
  const navigate = useNavigate()
  const langs = ["O'zbekcha", "Русский", "English"];
  const [selected, setSelected] = useState("O'zbekcha");
  const [open, setOpen] = useState(false);

  const LinkList = [
  { id: 1, text: "Bosh sahifa", to: "/" },
  { id: 2, text: "TV", to: "/tv" },
  { id: 3, text: "Filmlar", to: "/filmlar" },
  { id: 4, text: "Seriallar", to: "/seriallar" },
  { id: 5, text: "Multfilmlar", to: "/multfilmlar" },
  { id: 6, text: "Anime", to: "/anime" },
  { id: 7, text: "Jonli efir", to: "/jonliefir" },
  { id: 8, text: "Tariflar", to: "/tariflar" },
  ];

  const ButtonsList = [
  { id: 1, icon:<PromocodIcon/> },
  { id: 2, icon:<NotificationIcon/> },
  ]

  return (
    <header className="fixed z-10  backdrop-blur-sm w-full py-2 px-4">
    <div className=' containers flex justify-between sm:justify-around xl:justify-between  items-center '>
      <div className="flex items-center gap-2 sm:gap-7">
        <div className="block xl:hidden">
        <ModalHeader/>
        </div>
        <img className="sm:w-[66px] sm:h-[33px] w-[40px] h-[28px]" src={SiteLogoFooter} alt="logo" width={66} height={33} />
        <div className="cursor-pointer text-center hidden xl:flex gap-[14px]">
        {LinkList.map(item => <NavLink key={item.id} to={item.to} className={({ isActive }) => isActive ? "text-white font-normal text-[16px]" : "text-[#878787] hover:text-white duration-300"}>{item.text}</NavLink>)}
        </div>
      </div>

      <div className='flex gap-2 items-center  '>
        <button onClick={() => navigate('/searchPart')} className="flex cursor-pointer justify-center rounded-[12px] items-center sm:w-[58px]  sm:h-[58px] w-[45px] h-[45px]  bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white"><SearchSvg/> </button> 
        {ButtonsList.map(item => <button key={item.id} className="flex cursor-pointer justify-center rounded-[12px] items-center sm:w-[53px]  sm:h-[53px]  w-[45px] h-[45px]  bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white">{item.icon}</button> )}

        <div className="relative">
          <button onClick={() => setOpen(!open)} className=" flex justify-center rounded-[12px] items-center sm:w-[58px]  sm:h-[58px] w-[45px] h-[45px]  bg-[#2a2a29] hover:bg-[#373837] text-white" >
            {selected === "O'zbekcha" ? "UZ" : selected === "Русский" ? "RU" : "EN"}
          </button>
          {open && (
            <div className="absolute  z-[9999] right-0 mt-2 bg-[#2a2a29] rounded-[8px] overflow-hidden">
              {langs.map((l) => (
                <div key={l} onClick={() => { setSelected(l); setOpen(false); }} className="px-4 py-2 text-white hover:bg-[#373837] cursor-pointer"> {l}  </div> ))}
              </div>)}
        </div>
        <button className="flex cursor-pointer justify-center rounded-[12px] items-center sm:w-[58px]  sm:h-[58px] w-[45px] h-[45px]  bg-[#2a2a29] hover:bg-[#373837] duration-300 text-white"><RegisterIcon/> </button> 
      </div>
    </div>
    </header>
  )
}

export default Header