import { useLocation, useParams, Link, useNavigate } from "react-router-dom"
import { CalendarIcon, SeeIcon, SeenIcon } from "../../assets/icons"
import PATH from "../../components/PATH";


const NotificationMovieSingle = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  const handleWatch = () => {
    navigate(`/movie/${item._id || id}`, { state: { item } });
  };

  return (
    <div className="containers pt-25 p-5">
      <h1 className="md:text-[30px] text-[20px] text-white font-bold">{item.title}</h1>
      <div className="py-5 flex flex-col md:w-[730px] md:mx-0 mx-auto w-auto gap-5 text-white">
        <div className="flex items-center gap-2">
          <Link  to={PATH.boshSahifa} className="text-[#FFFFFF] text-[16px] md:text-[18px] font-medium underline">Bosh sahifa /</Link>
          <Link to={PATH.notification} className="text-white underline text-[16px] md:text-[18px] font-medium ">Xabarnoma /</Link>
          <p className="text-[#8b8c8c] md:flex hidden text-[16px] md:text-[18px] font-medium">{item.title}</p>
          <p className="text-[#8b8c8c] md:hidden flex text-[16px] md:text-[18px] font-medium">
            {item.title.split(" ").slice(0, 4).join(" ") + (item.title.split(" ").length > 4 ? "..." : "")}
          </p>

        </div>
        <div className="flex gap-[22px]  text-gray-400">
         <div className="gap-2 flex text-center items-center">
        <CalendarIcon/><span>{new Date(item.createdAt).toLocaleDateString()}</span></div>
        <div className="gap-2 flex items-center text-center">
        <SeenIcon/>0</div>
        </div>
        <img src={item.poster} alt={item.title}className=" h-[300px] rounded-xl object-cover shadow-lg"/>
        <p className="text-lg pr-5 text-gray-300 leading-relaxed">{item.description}</p>           
        <button onClick={handleWatch} className="rounded-xl bg-[#52b038] p-3 text-white text-[18px] font-semibold flex items-center justify-center hover:bg-[#4aa232] transition"><SeeIcon /><span className="ml-2">Ko'rish</span> </button>
      </div>
    </div>
  );
};

export default NotificationMovieSingle
