import { People } from "@/data";
import { Person } from "@/types";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selected, setSelected] = useState<Person[]>([]);
  const page = 0;
  const pageSize = 5;
  const pageSizeOptions = [5, 10, 15, 25];
  const findPerson = (person: Person) =>
    !!selected.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selected.filter((p) => p.id !== person.id);
  const handleChange = (person: Person) => {
    setSelected(
      findPerson(person) ? filterPerson(person) : [...selected, person]
    );
  };
  const columns = [
    {
      field: "checkbox",
      headerName: "",
      width: 60,
      type: "actions",
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
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
      rows={People}
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
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
