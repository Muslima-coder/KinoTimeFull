import { NavLink } from 'react-router-dom'
import { AppGallery, AppleIcon, FacebookPage, GallaxyStore, GoogleIcon, InstagramPage, SmartTv, TelegramIconF, TelegramPage, TelephoneIcon, YoutubePage} from '../assets/icons'
import { TVPrefix } from '../assets/images'

const Footer = () => {

  const Title = ({title}) => {
    return <p className="text-white font-bold text-[18px] !mb-[10px] ">{title}</p>
  }

  const Content = ({contentText, to}) => {
      return <NavLink to={to} className="text-[#868787] cursor-pointer hover:text-white duration-300 ">{contentText}</NavLink>  
    }

  const  LinkBtn = ({linkHref, children, classList}) => {
    return <a className={`${classList} text-white font-bold text-[18px] w-[107px] !h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px] cursor-pointer hover:bg-[#1213] duration-300`} href={linkHref}>{children}</a>
  }

  const AboutUsList = [
    {id:1, to:"/kontaktlar", text:"Kontaktlar"},
    {id:2, to:"/qollabQuvvatlash", text:"Qo'llab-quvvatlash"},
    {id:3, to:"/tariflar", text:"Tariflar"},
    {id:4, to:"/hamkorlar", text:"Hamkorlar"},
  ]

  const Catalog1 = [
    {id:1, to:"/tv", text:"TV"},
    {id:2, to:"/filmlar", text:"Filmlar"},
    {id:3, to:"/seriallar", text:"Seriallar"},
    {id:4, to:"/multfilmlar", text:"Multfilmlar"},
  ]
  const Catalog2 = [
    {id:1, to:"/anime", text:"Anime"},
    {id:2, to:"/jonliEfir", text:"Live"},
    {id:3, to:"/uzVideo", text:"Uz video",},
    {id:4, to:"/iTrackUz", text:"iTrack.uz"},
  ]


  return (
   <div className="!bg-[#1D1F1E] !px-0 sm:!px-[50px] md:!px-[10px] w-full py-4">
    <div className="containers">
      <div className="w-full border-b-[1px] border-[#242525] flex-wrap flex flex-col sm:flex-row justify-between items-start gap-10 lg:py-[35px]">

        {/* Chap tarafdagi kontent (About Us va Catalog wrapperlari) */}
         <div className=' flex lg:flex-row lg:justify-start justify-center flex-col items-center gap-[70px] lg:mx-0 mx-auto '>
           <div className='lg:mx-0 mx-auto lg:text-start text-center md:mt-0 mt-3'>
            <Title title={"Biz haqimizda"}/>
            <div className="text-[#868787] font-bold text-[14px] space-y-[3px] flex flex-col ">
              {AboutUsList.map(item => <Content to={item.to} key={item.id} contentText={item.text} />)}
            </div>
          </div>

          <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <Title title={"Katalog"}/>
            <div className="flex gap-[70px] ">
              <div className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
                {Catalog1.map(item => <Content to={item.to} key={item.id} contentText={item.text}/>)}
              </div>

             <div className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
                {Catalog2.map(item => <Content to={item.to} key={item.id} contentText={item.text}/>)}
              </div>
            </div>
          </div>
         </div>
         {/* Chap tarafdagi kontent (About Us va Catalog wrapperlari) */}

         {/* O'ng tarafdagi kontent (About Us va Catalog wrapperlari) */}

          <div className='flex lg:flex-row  lg:justify-start justify-center lg:mx-0 mx-auto flex-col gap-8 items-center'>
          <div className="flex flex-col gap-[6px]">
            <Title title={"Qo'llab-quvvatlash"}/>
            <LinkBtn classList={'!w-[195px]'} linkHref={'#'}>
              <TelegramIconF/>
              <span>Chatga yozish</span>
            </LinkBtn>

            <LinkBtn classList={'!w-[195px]'} linkHref={'#'}>
              <TelephoneIcon/>
              <span>71-202-4-202</span>
            </LinkBtn>
          </div>

             <div className='flex flex-col '>
              <Title title={"Ilovalar"}/>
               <div className="flex gap-[10px]">
                <div className="flex flex-col gap-[6px]">
                   <LinkBtn linkHref={'#'}>
                     <AppleIcon/>
                    </LinkBtn>

                   <LinkBtn linkHref={'#'}>
                     <SmartTv/>
                   </LinkBtn>
                </div>
            
                <div className="flex flex-col gap-[6px]">
                   <LinkBtn linkHref={'#'}>
                     <GoogleIcon/>
                   </LinkBtn>
                   <LinkBtn linkHref={'#'}>
                      <AppGallery/>
                   </LinkBtn>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <LinkBtn linkHref={'#'}>
                     <GallaxyStore/>
                   </LinkBtn>

                  <button className="text-white bg-[#52b038] font-bold text-[18px] w-[106px] h-[50px] rounded-[10px] flex items-center  flex-col cursor-pointer hover:bg-[#1213] duration-300">
                    <div className="flex px-[10px] gap-[10px] py-[5px]">
                      <img src={TVPrefix} alt="Logo" width={90} height={90}/>
                    </div>
                  </button>
                </div>
              </div>
             </div>
          </div>

            <div className="flex flex-col lg:justify-start justify-center lg:text-start text-center lg:mx-0 mx-auto lg:mb-0 mb-5">
              <Title title={"Ijtimoiy tarmoqlar"}/>

              <div className=" flex items-center gap-2 flex-wrap">
                <div className="flex gap-[10px]">
                  <LinkBtn classList={'!w-[50px] !h-[45px] '}>
                    <TelegramPage/>
                  </LinkBtn>

                  <LinkBtn classList={'!w-[50px] !h-[45px] '}>
                     <InstagramPage/>
                  </LinkBtn>

                </div>

                <div className="flex gap-[10px]">
                   <LinkBtn classList={'!w-[50px] !h-[45px] '}>
                    <FacebookPage/>
                  </LinkBtn>

                   <LinkBtn classList={'!w-[50px] !h-[45px] '}>
                    <YoutubePage/>
                  </LinkBtn>
                </div>
              </div>


          </div>
        {/* O'ng tarafdagi kontent (About Us va Catalog wrapperlari) */}
        
      </div>


      <div className="!py-5">
        <div className="lg:flex-row flex-col flex items-center justify-center lg:justify-between">
          <div>
            <p className="text-[#8e8e8d] font-normal lg:text-start text-center ">© 2015 - 2025 iTV (LLC ALPHAZET TECHNOLOGIES).v1.44.0</p>
          </div>
          <div className="text-[#8e8e8d] flex gap-[30px]">
            <option className='cursor-pointer' value="Uzbek">O'zbekcha</option>
            <option className='cursor-pointer' value="Russian">Русский</option>
            <option className='cursor-pointer' value="English">English</option>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer