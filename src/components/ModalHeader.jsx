import React, { lazy, useState } from "react";
import { Modal, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const ModalHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        type="primary" 
        shape="default" 
        className="sm:!w-[50px] sm:!h-[48px] sm:!text-[25px] !w-[45px]  !h-[45px] !text-[23px]  !bg-[#2a2a29]"
        icon={<MenuOutlined/>} 
        onClick={() => setOpen(true)} 
      />

      {/* Modal */}
      <Modal
        open={open}
        footer={null} 
        onCancel={() => setOpen(false)}
        // centered
      >
        <Button danger block onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

export default ModalHeader;
