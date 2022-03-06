import React from 'react';
import {
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

const ViewLottery = ({name, ticketPrice, duration}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
          setOpen(true);
    };
      
    const handleClose = () => {
          setOpen(false);
    };
      
    const renderForm = () => {
        return (
            <div>
                <li>Name:  {String(name)} </li>
                <li>Ticket Price: {String(ticketPrice)}</li>
                <li>Duration: {String(duration)}</li>
            </div>
        )
    }

  return (
    <>
          <Button variant="outlined" color="primary" onClick={handleClickOpen} >
              View Lottery
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">View Lottery</DialogTitle>
              <DialogContent>
                {renderForm()}
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
