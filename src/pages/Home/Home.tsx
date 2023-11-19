import { People } from "@/data";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const page = 0;
  const pageSize = 5;
  const pageSizeOptions = [5, 10, 15, 25];
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of Happiness',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ];
  return (
    <>
      <DataGrid
        rows={People}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pagination={true}
        pageSizeOptions={pageSizeOptions}
        paginationModel={{ page: page, pageSize: pageSize }}
        getRowId={(row: any) => row.id}
      />
    </>
  );
};

export default Home;
