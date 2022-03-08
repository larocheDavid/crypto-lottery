import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const ViewLottery = ({name, ticketPrice, duration}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "Name", width: 130 },
    { field: "ticketPrice", headerName: "Ticket Price", width: 130 },
    { field: "duration", headerName: "Duration", width: 130 },
  ];

  const rows = [
    { id: name, ticketPrice: ticketPrice, duration: duration },
  ];

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View Lottery
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">View Lottery</DialogTitle>
        <DialogContent>
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewLottery;
