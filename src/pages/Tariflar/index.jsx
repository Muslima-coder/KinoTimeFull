import TariflarCard from "../../components/TariflarCard"
import TariflarCard2 from "../../components/TariflarCard2"

const TariflarPart = () => {
  return (
    <div className="containers pt-20 px-3 pb-5 ">
    <div className="flex flex-col gap-[10px] mb-[15px]">
        <h2 className="text-[50px] font-bold text-white mb-[10px]">Tariflar</h2>
        <p className="text-[18px] font-semibold text-white">
          Bosh sahifa / <span className="!text-[#8b8c8c]">Tariflar</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-[20px] items-center justify-center md:justify-between">
         <TariflarCard/>
         <TariflarCard/>
         <TariflarCard/>
      </div>

      <h2 className="text-[32px] font-bold text-white py-[40px]">Qo'shimcha obunalar</h2>
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-[20px] mb-8">
        <TariflarCard2/>
        <TariflarCard2/>
        <TariflarCard2/>
        <TariflarCard2/>
        <TariflarCard2/>
        <TariflarCard2/>
      </div>
    </div>
  )
}

export default TariflarPart