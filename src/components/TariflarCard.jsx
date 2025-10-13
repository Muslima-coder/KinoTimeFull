import { TariflarIcon2, TariflarIcon3, TariflarIcon4, TariflarTvIcon } from "../assets/icons"
import { SiteLogoFooter } from "../assets/images"

const TariflarCard = () => {
  return (
    <div className="w-[390px] hover:scale-[1.04] duration-500 cursor-pointer bg-[#1d1f1e] rounded-[30px] p-10">
        <h3 className="text-[26px] font-extrabold mb-[25px]">Premium+</h3>
        <div className="flex items-center justify-between flex-wrap gap-[20px] mb-[20px]">
            <div className="flex items-center gap-[8px]">
                <div className="w-[40px] h-[40px] bg-[#343635] rounded-full flex items-center justify-center"><TariflarTvIcon/></div>
                <div>
                    <p className="text-[20px] text-white">190+</p>
                    <p className="text-[15px] text-[#9eaab2]">Tv kanallar</p>
                </div>
            </div>
            
            <div className="flex items-center gap-[8px]">
                <div className="w-[40px] h-[40px] bg-[#343635] rounded-full flex items-center justify-center"><TariflarIcon2/></div>
                <div>
                    <p className="text-[20px] text-white">190+</p>
                    <p className="text-[15px] text-[#9eaab2]">Tv kanallar</p>
                </div>
            </div>
            <div className="flex items-center gap-[8px]">
                <div className="w-[40px] h-[40px] bg-[#343635] rounded-full flex items-center justify-center"><TariflarIcon3/></div>
                <div>
                    <p className="text-[20px] text-white">190+</p>
                    <p className="text-[15px] text-[#9eaab2]">Tv kanallar</p>
                </div>
            </div>
            <div className="flex items-center gap-[8px]">
                <div className="w-[40px] h-[40px] bg-[#343635] rounded-full flex items-center justify-center"><TariflarIcon4/></div>
                <div>
                    <p className="text-[20px] text-white">190+</p>
                    <p className="text-[15px] text-[#9eaab2]">Tv kanallar</p>
                </div>
            </div>
        </div>

        <p className="text-[#9eaab2] mb-[5px]">O'z ichiga oladi:</p>
            <marquee>
                <div className="flex items-center justify-between w-full mb-[15px]">
                <img src={SiteLogoFooter} alt="img" width={20} height={20}/>
                <img src={SiteLogoFooter} alt="img" width={20} height={20}/>
                <img src={SiteLogoFooter} alt="img" width={20} height={20}/>
                <img src={SiteLogoFooter} alt="img" width={20} height={20}/>
                <img src={SiteLogoFooter} alt="img" width={20} height={20}/>
                </div>
            </marquee>
            <p className="text-[20px]">sotvoling</p>
    </div>
  )
}

export default TariflarCard