import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store.redux";
import { Person } from "@/types";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PeopleTable: React.FC = () => {
  const [selected, setSelected] = useState<Person[]>([]);
  const page = 0;
  const pageSize = 5;
  const pageSizeOptions = [5, 10, 15, 25];
  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const stateFavorites = useSelector((store: AppStore) => store.favorite);

  const findPerson = (person: Person) =>
    !!stateFavorites.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    stateFavorites.filter((p) => p.id !== person.id);
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selected, person];
    dispatch(addFavorite(filteredPeople));
    setSelected(filteredPeople);
  };

  useEffect(() => {
    setSelected(stateFavorites);
  }, [stateFavorites]);

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
      rows={statePeople}
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

export default PeopleTable;
