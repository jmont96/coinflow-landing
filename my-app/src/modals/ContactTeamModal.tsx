import React, { useState } from "react";
import { Modal } from "antd";
import { SendEmailComponent } from "../SendEmailComponent";

type ModalProps = {
  open: boolean | undefined;
  setOpen: (val: boolean) => void;
};

export function ContactTeamModal(props: ModalProps) {
  const { open, setOpen } = props;

  return (
    <Modal
      footer={null}
      title="Contact Coinflow"
      open={open}
      onCancel={() => setOpen(false)}
    >
      <div className={"flex-col flex"}>
        <SendEmailComponent onClose={() => setOpen(false)} />
      </div>
    </Modal>
  );
}
