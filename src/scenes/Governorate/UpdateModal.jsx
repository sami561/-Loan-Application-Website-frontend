import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const UpdateModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
        ></Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Here you can place any content or forms needed for editing or
          confirming deletion.
        </Typography>
      </Box>
    </Modal>
  );
};

export default UpdateModal;
