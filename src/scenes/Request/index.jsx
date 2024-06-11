import React, { useEffect, useState } from "react";
import {
  Box,
  useTheme,
  IconButton,
  Modal,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridCheckCircleIcon } from "@mui/x-data-grid";
import Header from "components/Header";
import CloseIcon from "@mui/icons-material/Close";
import {
  useGetBankQuery,
  useGetGovernorateQuery,
  useGetRequestQuery,
} from "state/apiSpring";
import { Add, Delete, Update } from "@mui/icons-material";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";

const Request = () => {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowDelete, setSelectedRowDelete] = useState(null);
  /*   const { data, isLoading, refetch } = useGetBankQuery(); */
  const { data, isLoading, refetch } = useGetRequestQuery();
  const handleOpen = (content) => {
    setModalContent(content);
    setSelectedRow(content);
    setOpen(true);
  };
  const handleOpenDelete = (content) => {
    setModalContent(content);
    setSelectedRowDelete(content);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    refetch();
    setOpenDelete(false);
  };
  console.log(data);
  const handelOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    refetch();
    setOpenAdd(false);
  };
  const handleClose = () => {
    refetch();
    setOpen(false);
  };
  const handleApprove = (row) => {
    // logic to handle approval
  };

  const handleReject = (row) => {
    // logic to handle rejection
  };

  const columns = [
    {
      field: "file",
      headerName: "Request file",
      flex: 0.25,
      renderCell: (params) => {
        console.log(params.value);
        const newPath = params.value.replace("../frontend/public/", "/");
        return (
          <Avatar
            src={newPath}
            alt="Bank Image"
            sx={{ width: 40, height: 40, borderRadius: "10px" }}
          />
        );
      },
    },
    {
      field: "id",
      headerName: "ID",
      flex: 0.25,
    },

    {
      field: "periode",
      headerName: "periode",
      flex: 0.25,
    },

    {
      field: "status",
      headerName: "status",
      flex: 0.25,
      sortable: false,
    },
    {
      field: "creditType",
      headerName: "credit Type",
      flex: 0.25,
    },
    {
      field: "user.firstname",
      headerName: "User Names",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "bank",
      headerName: "bank Name",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "devis",
      headerName: "quote",
      flex: 0.5,
    },
    {
      field: "requestDate",
      headerName: "request Date",
      flex: 0.5,
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent="space-around">
            <IconButton
              onClick={() => handleApprove(params.row)}
              color="primary"
              aria-label="approve"
            >
              <GridCheckCircleIcon />
            </IconButton>
            <IconButton
              onClick={() => handleReject(params.row)}
              color="error"
              aria-label="reject"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Request" subtitle="Entire list of Requests" />
      <Box m="1rem" display="flex" justifyContent={"flex-end"}>
        <Button
          startIcon={<Add />}
          variant="contained"
          color="primary"
          onClick={() => handelOpenAdd()}
        >
          add new Request
        </Button>
      </Box>
      <Box
        height="80vh"
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
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Request;
