import { AppGallery, AppleIcon, FacebookPage, GallaxyStore, GoogleIcon, InstagramPage, SmartTv, TelegramIconF, TelegramPage, TelephoneIcon, YoutubePage} from '../assets/icons'
import { TVPrefix } from '../assets/images'

const Footer = () => {

  const Title = ({title}) => {
    return <p className="text-white font-bold text-[18px] !mb-[10px] ">{title}</p>
  }

  const Content = ({contentText}) => {
      return <p className="text-[#868787] cursor-pointer hover:text-white duration-300 ">{contentText}</p>  
    }

  const  LinkBtn = ({linkHref, children, classList}) => {
    return <a className={`${classList} text-white font-bold text-[18px] w-[107px] !h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px] cursor-pointer hover:bg-[#1213] duration-300`} href={linkHref}>{children}</a>
  }

  const AboutUsList = [
    {id:1, text:"Kontaktlar"},
    {id:2, text:"Qo'llab-quvvatlash"},
    {id:3, text:"Tariflar"},
    {id:4, text:"Hamkorlar"},
  ]

  const Catalog1 = [
    {id:1, text:"TV"},
    {id:2, text:"Filmlar"},
    {id:3, text:"Seriallar"},
    {id:4, text:"Multfilmlar"},
  ]
  const Catalog2 = [
    {id:1, text:"Anime"},
    {id:2, text:"Live"},
    {id:3, text:"Uz video"},
    {id:4, text:"iTrack.uz"},
  ]


  return (
    <div className="!bg-[#1D1F1E] lg:px-0 p-10 ">
      <div className='containers  lg:px-10'>
      <div className="border-b-[1px] border-[#242525] w-full  flex-wrap flex justify-between  items-start gap-5 lg:py-[35px]">

        {/* Chap tarafdagi kontent (About Us va Catalog wrapperlari) */}
         <div className='flex lg:flex-row lg:justify-start justify-center  flex-col items-center gap-[70px]'>
           <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <Title title={"Biz haqimizda"}/>
            <div className="text-[#868787] font-bold text-[14px] space-y-[3px]">
              {AboutUsList.map(item => <Content key={item.id} contentText={item.text} />)}
            </div>
          </div>

          <div className='lg:mx-0 mx-auto lg:text-start text-center'>
            <Title title={"Katalog"}/>
            <div className="flex gap-[70px]">
              <div className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
                {Catalog1.map(item => <Content key={item.id} contentText={item.text}/>)}
              </div>

             <div className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
                {Catalog2.map(item => <Content key={item.id} contentText={item.text}/>)}
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

            <div className="flex flex-col lg:justify-start justify-center lg:text-start text-center lg:mx-0 mx-auto">
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




























// import { AppGallery, AppleIcon, FacebookPage, GallaxyStore, GoogleIcon, InstagramPage, SmartTv, TelegramIconF, TelegramPage, TelephoneIcon, YoutubePage} from '../assets/icons'
// import { TVPrefix } from '../assets/images'

// const Footer = () => {
//   return (
//     <div className="!bg-[#1D1F1E] py-8">
//       <div className="containers flex justify-between gap-[70px] ">

//         <div className="pt-[60px] flex lg:gap-[100px]">
//           <div className="flex flex-col gap-[10px]">
//             <span className="text-white font-bold text-[18px]">Biz haqimizda</span>
//             <ul className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
//               <li className="hover:text-white duration-300">Kontaktlar</li>
//               <li className="hover:text-white duration-300">Qo'llab-quvvatlash</li>
//               <li className="hover:text-white duration-300">Tariflar</li>
//               <li className="hover:text-white duration-300">Hamkorlar</li>
//             </ul>
//           </div>

//           <div className="flex flex-col gap-[10px]">
//             <span className="text-white font-bold text-[18px]">Katalog</span>
//             <div className="flex gap-[70px] ">
//               <ul className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
//                 <li className="hover:text-white duration-300">TV</li>
//                 <li className="hover:text-white duration-300">Filmlar</li>
//                 <li className="hover:text-white duration-300">Seriallar</li>
//                 <li className="hover:text-white duration-300">Multfilmlar</li>
//               </ul>
//               <ul className="text-[#868787] font-bold text-[14px] flex flex-col gap-[3px]">
//                 <li className="hover:text-white duration-300">Anime</li>
//                 <li className="hover:text-white duration-300">Live</li>
//                 <li className="hover:text-white duration-300">Uz video</li>
//                 <li className="hover:text-white duration-300">iTrack.uz</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="pt-[60px] flex  gap-[50px] lg:pt-[10px]">

//           <div className="flex flex-col gap-[6px]">
//             <span className="text-white font-bold text-[18px]">Qo'llab-quvvatlash</span>
//             <button className="text-white font-bold text-[18px] w-[195px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px] cursor-pointer hover:bg-[#1213] duration-300">
//               <TelegramIconF/>
//               <span>Chatga yozish</span>
//             </button>
//             <button className="text-white font-bold text-[18px] w-[195px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center gap-[12px] px-[15px] cursor-pointer hover:bg-[#1213] duration-300">
//               <TelephoneIcon/> 
//               <span>71-202-4-202</span>
//             </button>
//           </div>

//           <div className="gap-[50px]  lg:gap-[250px]">

//             <div className="flex flex-col gap-[6px]">
//               <span className="text-white font-bold text-[18px]">Ilovalar</span>

//               <div className="flex gap-[10px]">
//                 <div className="flex flex-col gap-[6px]">
//                   <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[5px]">
//                       <AppleIcon/>
//                     </div>
//                   </button>

//                   <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[5px]">
//                       <SmartTv/>
//                     </div>
//                   </button>
//                 </div>
            
//                 <div className="flex flex-col gap-[6px]">
//                   <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[5px]">
//                       <GoogleIcon/>
//                     </div>
//                   </button>
//                   <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[5px]">
//                       <AppGallery/>
//                     </div>
//                   </button>
//                 </div>

//                 <div className="flex flex-col gap-[6px]">
//                   <button className="text-white font-bold text-[18px] w-[145px] h-[50px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[5px]">
//                       <GallaxyStore/>
//                     </div>
//                   </button>

//                   <button className="text-white bg-[#52b038] font-bold text-[18px] w-[145px] h-[50px] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[5px]">
//                       <img src={TVPrefix} alt="Logo" width={90} height={90}/>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <span className="text-white font-bold text-[18px] mb-[6px]">Ijtimoiy tarmoqlar</span>

//               <div className="flex flex-col gap-[6px]">
//                 <div className="flex gap-[10px]">
//                   <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[10px]">
//                       <TelegramPage/>
//                     </div>
//                   </button>

//                   <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[10px]">
//                       <InstagramPage/>
//                     </div>
//                   </button>
//                 </div>

//                 <div className="flex gap-[10px]">
//                   <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[10px]">
//                       <FacebookPage/>
//                     </div>
//                   </button>
//                   <button className="text-white font-bold text-[18px] w-[50px] h-[45px] bg-[#FFFFFF0D] rounded-[10px] flex items-center px-[15px] flex-col cursor-pointer hover:bg-[#1213] duration-300">
//                     <div className="flex px-[10px] gap-[10px] py-[10px]">
//                       <YoutubePage/>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
        
//       </div>

//       <div className="mt-[90px]">
//         <span className="flex w-full h-[1px] bg-[#2e2f2f]"></span>
//         <div className="containers flex justify-between !mt-[35px] lg:w-[1200px]">
//           <div>
//             <p className="text-[#8e8e8d] font-normal ">© 2015 - 2025 iTV (LLC ALPHAZET TECHNOLOGIES).v1.44.0</p>
//           </div>
//           <div className="text-[#8e8e8d] flex gap-[30px]">
//             <option value="Uzbek">O'zbekcha</option>
//             <option value="Russian">Русский</option>
//             <option value="English">English</option>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Footer
