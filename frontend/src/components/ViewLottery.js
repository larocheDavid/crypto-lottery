import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import {
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

//const ViewLottery = ({name, ticketPrice, duration}) => {
const ViewLottery = (props) => {

    const name = props.name;
    const ticketPrice = props.ticketPrice;
    const duration = props.duration;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
          setOpen(true);
    };
      
    const handleClose = () => {
          setOpen(false);
    };
    
    const columns = [
        { field: 'name_', headerName: 'Name', width: 70 },
        { field: 'ticketPrice_', headerName: 'Ticket Price', width: 130 },
        { field: 'duration_', headerName: 'Duration', width: 130 },
      ];
    
    const rows = [
        { name_: name, ticketPrice_: ticketPrice, duration_: duration},
    ];
/*
    const renderForm = () => {
        return (
            
            
            <div>
                <li>Name:  {String(name)} </li>
                <li>Ticket Price: {String(ticketPrice)}</li>
                <li>Duration: {String(duration)}</li>
            </div>
            
        );
    }*/
    
  return (
    <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen} >
              View Lottery
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">View Lottery</DialogTitle>
              <DialogContent>
              ...
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="primary">
                      Close
                  </Button>
              </DialogActions>
          </Dialog>
      </>
  )
}

export default ViewLottery
