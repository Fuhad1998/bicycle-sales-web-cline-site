import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { Table } from "react-bootstrap";

const MyOrder = ({ orders }) => {
  return (

    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Product Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
      {
        orders.map(order =>  <tr
        key={order?.id}
        

        >
                    
          <td>{order?.name}</td>
          <td>{order?.orderName}</td>
            <td>{order?.email}</td>
            <td>{order?.number}</td>
            <td>{order?._id}</td>
            <td>
              {" "}
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </Stack>
            </td>
          </tr>
        )
      }
      </tbody>
    </Table>
  );
};

export default MyOrder;
