import express from 'express';
import { getRooms, addRoom, getSingleRoom, deleteRoom, updateRoom } from '../controllers/rooms.controller.js';

const roomsRouter = express.Router();

// All routes starts with /guests

// ROUTE: Get ALL guests
roomsRouter.get('/', getRooms);

// ROUTE: POST new guest
roomsRouter.post('/', addRoom);

// ROUTE: GET Single guest with ID
roomsRouter.get('/:id', getSingleRoom);

// ROUTE: DELETE guest with ID
roomsRouter.delete('/:id', deleteRoom);

// ROUTE: UPDATE guest
roomsRouter.patch('/:id', updateRoom);

export default roomsRouter;