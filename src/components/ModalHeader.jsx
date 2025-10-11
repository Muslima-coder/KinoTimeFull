import React, { useState } from "react";
import { Modal, Button } from "antd";
import { MenuOutlined, RightOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PATH from "./PATH";

const ModalHeader = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Ekran widthiga qarab responsiv qilish
  const isMobile = window.innerWidth < 640; // sm: 640px
  const modalWidth = isMobile ? "100vw" : "40vw";

  const menuItems = [
    { id: 1, title: "Bosh sahifa", to: PATH.boshSahifa },
    { id: 2, title: "TV", to: PATH.tv },
    { id: 3, title: "Filmlar", to: PATH.filmlar },
    { id: 4, title: "Seriallar", to: PATH.seriallar },
    { id: 5, title: "Multfilmlar", to: PATH.multfilmlar },
    { id: 6, title: "Anime", to: PATH.anime },
    { id: 7, title: "Live", to: PATH.jonliEfir },
    { id: 8, title: "Tariflar", to: PATH.tariflar },
  ];


  return (
    <>
      <Button
        type="primary"
        shape="default"
        className="sm:!w-[50px] sm:!h-[48px] sm:!text-[25px] !w-[45px] !h-[45px] !text-[23px] !bg-[#2a2a29]"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
      />

      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        className="custom-modal"
        closable={false}
        style={{
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          height: "100vh",
        }}
        width={modalWidth} // responsiv width
        styles={{
          content: {
            height: "100vh",
            background: "#1d1f1e",
            margin: 0,
            padding: 0,
            borderRadius: 0,
          },
          body: {
            height: "100%",
            padding: 0,
            background: "#1d1f1e",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Header */}
        <div className="p-2 bg-[#292a29] border-b border-neutral-800 text-center text-white text-[18px] font-medium">
          <button onClick={() => setOpen(false)} className="cursor-pointer">
            Yopish
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-2 py-3 px-9">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link to={item.to} key={item.id}>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "bg-[#273c23] text-white"
                      : "bg-[#2a2a2a] text-white hover:bg-[#383838]"
                  }`}>
                  <span className="font-medium">{item.title}</span>
                  <RightOutlined className="text-[12px]" />
                </div>
              </Link>
            );
          })}


          {/* More toggle */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#2a2a2a] text-white cursor-pointer"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            <span>Boshqalar</span>
            {moreOpen ? (
              <DownOutlined className="text-[12px]" />
            ) : (
              <RightOutlined className="text-[12px]" />
            )}
          </div>

          {moreOpen && (
            <div className="ml-3 flex flex-col gap-2 mt-2">
              <div className="px-4 py-3 rounded-lg bg-[#2a2a2a] text-white cursor-pointer">
                Sport
              </div>
              <div className="px-4 py-3 rounded-lg bg-[#2a2a2a] text-white cursor-pointer">
                Musiqa
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalHeader;
