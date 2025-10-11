import { SelectPart } from "../../components";
const FilmlarPart = () => {
  return (
    <div className="containers pt-15 px-3 pb-5 ">
    <div className="flex flex-col gap-[10px] mb-[15px]">
        <h2 className="text-[64px] font-bold text-white mb-[10px]">Filmlar</h2>
        <p className="text-[18px] font-semibold text-white">
          Bosh sahifa / <span className="!text-[#8b8c8c]">Filmlar</span>
        </p>
      </div>
    <SelectPart/>
    </div>
  )
}

export default FilmlarPart
