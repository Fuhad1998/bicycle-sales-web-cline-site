import { Button, Stack } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';
import DeleteIcon from "@mui/icons-material/Delete";

const ManageAllOrder = ({manageAllOrders}) => {
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
          manageAllOrders.map(manageAllOrder =>  <tr
          key={manageAllOrder?.id}
          
  
          >
                      
            <td>{manageAllOrder?.name}</td>
            <td>{manageAllOrder?.orderName}</td>
              <td>{manageAllOrder?.email}</td>
              <td>{manageAllOrder?.number}</td>
              <td>{manageAllOrder?._id}</td>
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

export default ManageAllOrder;