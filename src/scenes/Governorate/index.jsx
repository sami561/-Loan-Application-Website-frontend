import React, { useState } from "react";
import { Box, useTheme, IconButton, Modal, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";

import { useGetGovernorateQuery } from "state/apiSpring";

const Governorate = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetGovernorateQuery();
  console.log(data);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "code",
      headerName: "Code",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => (
        <IconButton onClick={() => handleOpen(`Edit ID: ${params.row._id}`)}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => (
        <IconButton onClick={() => handleOpen(`Delete ID: ${params.row._id}`)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Governorate" subtitle="List of Governorates" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={data || []}
          columns={columns}
        />
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalContent}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Here you can place any content or forms needed for editing or
              confirming deletion.
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Governorate;
