import SelectPart from "../../components/SelectPart"

const AnimePart = () => {
  return (
    <div className="containers pt-15 px-3 pb-5 ">
    <div className="flex flex-col gap-[10px] mb-[15px]">
        <h2 className="text-[50px] font-bold text-white mb-[10px]">Anime</h2>
        <p className="text-[18px] font-semibold text-white">
          Bosh sahifa / <span className="!text-[#8b8c8c]">Anime</span>
        </p>
      </div>
    <SelectPart/>
    </div>
  )
}

export default AnimePart