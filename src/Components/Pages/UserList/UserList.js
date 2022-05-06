import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom"
import { useState } from "react";

const UserList = () => {
  // const [data, setDate] = useState(userRows)
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "user", width: 200, renderCell: (params) => {
      return (
        <div></div>
      )
    } },
    { field: "email", headerName: "email", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "transaction volume",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/user/" + params.row .id  }>
          <button className="userListEdit">Edit</button>
          <DeleteIcon className="userListDelete"/>
          </Link>
          </>
        )
      }
    },
  ];

  const rows = [
    {
      id: 1,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 10,
      username: "John Snow",
      email: "hon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
