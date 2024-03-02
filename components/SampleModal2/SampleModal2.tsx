"use client";
import * as React from "react";
import { atom, useAtom } from "jotai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Jotaiのatomを定義します。これはアプリケーションのどこからでもアクセス可能な状態を作成します。
const modalOpenState = atom(false);

export function SampleModal2() {
  // useAtomフックを使用して、atomの状態と更新関数を取得します。
  const [open, setOpen] = useAtom(modalOpenState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal2</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            モーダル2
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            サンプル2
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
