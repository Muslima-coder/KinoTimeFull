import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CalendarIcon, NextIcon } from '../../assets/icons'
import PATH from '../../components/PATH'

const Notification = () => {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    axios
      .get("https://kinotime.world/api/notifications?lang=uz")
      .then(res => {
        setNotifications(res.data)
      })
      .catch(err => {
        console.error("Xatolik bor:", err)
      })
  }, [])

  return (
    <div className='containers pt-20 pb-5'>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2">
          <Link className="text-white" to="/home">Bosh sahifa</Link>
          <p className="text-white">/ Xabarnoma</p>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-5">
          {notifications.length > 0 ? (
            notifications.map((item) => (
              <Link  key={item.id}   to={PATH.notificationSingle(item.id)}  state={{ item }}  className="w-[360px] bg-[#1d1f1e] text-white rounded-xl overflow-hidden shadow-lg" >
                <img  src={item.poster}  alt={item.title}  className="w-full h-[130px] object-cover"/>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-[18px] font-bold line-clamp-1">{item.title}</h3>
                  <p className="text-[16px] text-gray-300 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between">
                    <div className="flex text-center gap-2 items-center"> <CalendarIcon/> <span className="text-[17px] text-gray-500"> {new Date(item.createdAt).toLocaleDateString()} </span></div>
                    <div className="flex items-center gap-2">
                      <p className="text-[16px] text-gray-300">Batafsil</p> <NextIcon/>
                    </div>
                  </div>
                </div>
              </Link>))) : ( <p className="text-white">Xabarnoma yo‘q</p> )}
        </div>
      </div>
    </div>
  )
}

export default Notification
