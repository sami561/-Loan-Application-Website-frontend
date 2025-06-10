import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import httpClient from "utils/apiMethods";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
});

const UpdateModal = ({ open, handleClose, row }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (row) {
      reset(row);
    }
  }, [row, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await httpClient.put(
        `/kamarket/categories/${row.id}`,
        data
      );
      toast.success("Category updated successfully");
      handleClose();
    } catch (error) {
      console.error(error.response?.data?.businessErrorDescription);
      toast.error(
        error.response?.data?.businessErrorDescription ||
          "Failed to update category"
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
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={handleClose}
        >
          <CloseOutlined />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Category
        </Typography>
        {row ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 2 }}
            >
              Save Changes
            </Button>
          </form>
        ) : (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            No data available
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default UpdateModal;
