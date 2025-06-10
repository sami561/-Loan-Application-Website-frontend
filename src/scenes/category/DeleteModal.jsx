import React from "react";
import { CloseOutlined } from "@mui/icons-material";
import { Box, IconButton, Modal, Typography, Button } from "@mui/material";
import httpClient from "utils/apiMethods";
import { toast } from "react-toastify";

const DeleteModal = ({ open, handleClose, row }) => {
  const handleDelete = async () => {
    try {
      const response = await httpClient.delete(`/kamarket/categories/${row}`);
      toast.success("Category deleted successfully");
      handleClose();
    } catch (error) {
      console.error(error.response?.data?.businessErrorDescription);
      toast.error(
        error.response?.data?.businessErrorDescription ||
          "Failed to delete category"
      );
    }
  };

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
          borderRadius: 4,
          p: 4,
          outline: "none",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          onClick={handleClose}
        >
          <CloseOutlined />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Delete Category
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Are you sure you want to delete this category? This action cannot be
          undone.
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
