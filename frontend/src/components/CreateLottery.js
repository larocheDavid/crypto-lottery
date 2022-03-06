import React from "react";
import ViewLottery from "./ViewLottery";
import { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

const CreateLottery = ({ createLottery, disabled }) => {
    const [name, setName] = useState("")
    const [ticketPrice, setTicketPrice] = useState(0)
    const [duration, setDuration] = useState(1)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = () => {
        createLottery({
            name,
            ticketPrice,
            duration
        })
        handleClose()
    }

    const renderForm = () => {
        return (<>
            <div>
            <TextField
                fullWidth
                margin="normal"
                label="Lottery Name"
                id="name"
                type="text"
                onChange={(event) => { setName(event.target.value) }}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Ticket Price"
                id="ticketPrice"
                type="number"
                onChange={(event) => { setTicketPrice(event.target.value) }}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Duration"
                id="duration"
                type="number"
                onChange={(event) => { setDuration(event.target.value) }}
            />
            </div>
        </>)
    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} disabled={disabled}>
                Create Lottery
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Lottery</DialogTitle>
                <DialogContent>
                    {renderForm()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>

           <ViewLottery name = {name} ticketPrice = {ticketPrice} duration = {duration} />
        </>
    )
}

export default CreateLottery;
