import express from 'express'
import { getGuests, addGuest, getSingleGuest, deleteGuest, updateGuest } from '../controllers/guests.controller.js'

const guestsRouter = express.Router()

// All routes starts with /guests
guestsRouter
    .route('/') // ROUTE : http://localhost/guests/
    .get(getGuests) // ROUTE: Get ALL guests
    .post(addGuest) // ROUTE: POST new guest

guestsRouter
    .route('/:id') // ROUTE: http://localhost/guests/:id
    .get(getSingleGuest) // ROUTE: GET Single guest with ID
    .patch(updateGuest) // ROUTE: UPDATE guest
    .delete(deleteGuest) // ROUTE: DELETE guest with ID

export default guestsRouter