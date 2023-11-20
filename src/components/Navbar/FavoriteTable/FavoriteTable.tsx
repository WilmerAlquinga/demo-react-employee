import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store.redux";
import { Person } from "@/types";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteTable: React.FC = () => {
  const page = 0;
  const pageSize = 5;
  const pageSizeOptions = [5, 10, 15, 25];
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorite);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "checkbox",
      headerName: "",
      width: 60,
      type: "actions",
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            color="error"
            aria-label="Delete"
            onClick={() => handleClick(params.row)}
          >
            <Delete />
          </IconButton>
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={stateFavorites}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pagination
      paginationMode="client"
      pageSizeOptions={pageSizeOptions}
      initialState={{
        pagination: {
          paginationModel: { page: page, pageSize: pageSize },
        },
      }}
      getRowId={(row: Person) => row.id}
    />
  );
};

export default FavoriteTable;
