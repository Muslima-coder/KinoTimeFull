import React, { useState } from "react";
import { Modal, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const ModalHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        shape="default"
        className="sm:!w-[50px] sm:!h-[48px] sm:!text-[25px] !w-[45px] !h-[45px] !text-[23px] !bg-[#2a2a29]"
        icon={<MenuOutlined />}
        onClick={() => setOpen(true)}
      />

      {/* Modal */}
      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        className="custom-modal"
        style={{
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
        }}
        width="50vw"
        styles={{
          body: {
            height: "100vh",
            padding: 0,
          },
        }}
      >
        <div className="!bg-[#292a29] !w-full p-5">
          <Button danger block onClick={() => setOpen(false)}>
            Yopish
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalHeader;
