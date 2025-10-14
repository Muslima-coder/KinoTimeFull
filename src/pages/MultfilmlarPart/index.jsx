import SelectPart from "../../components/SelectPart"

const MultfilmlarPart = () => {
  return (
    <div className="containers pt-15 px-3 pb-5 ">
    <div className="flex flex-col gap-[10px] mb-[15px]">
        <h2 className="text-[50px] font-bold text-white mb-[10px]">Multfilmlar</h2>
        <p className="text-[18px] font-semibold text-white">
          Bosh sahifa / <span className="!text-[#8b8c8c]">Multfilmlar</span>
        </p>
      </div>
    <SelectPart apiUrl={"kinotime.world/api/cartoons"}/>
    </div>
  )
}

export default MultfilmlarPart