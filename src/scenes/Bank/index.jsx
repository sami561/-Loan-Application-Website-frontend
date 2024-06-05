import React, { useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useGetBankQuery } from "state/apiSpring";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Bank = () => {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetBankQuery();
  console.log(data);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.25,
    },
    {
      field: "nom",
      headerName: "Name",
      flex: 0.25,
    },
    {
      field: "contactEmail",
      headerName: "contact Email",
      flex: 0.25,
    },
    {
      field: "contactPhone",
      headerName: "contact phone",
      flex: 0.25,
    },

    {
      field: "image",
      headerName: "image Bank",
      flex: 0.25,
    },

    {
      field: "gouvernorat",
      headerName: "# of gouvernorat",
      flex: 0.25,
      sortable: false,
    },

    { field: "user", headerName: "# of agent", flex: 0.5 },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.25,
      renderCell: (params) => (
        <IconButton onClick={() => console.log("tee")}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.25,
      renderCell: (params) => (
        <IconButton onClick={() => console.log("tee")}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Banks" subtitle="Entire list of banks" />
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

export default Bank;
