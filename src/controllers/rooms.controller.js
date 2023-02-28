import { conn } from "../db/connection.js";

export const getRooms = async (req, res, next) => {
    console.log('ROUTE: GET ALL ROOMS');
    try {
        conn.query('SELECT * FROM rooms;', (err, rows, fields) => {
            res.send(rows);
        });
    } catch (error) {
        next(error);
    }
}

export const addRoom = async (req, res, next) => {
    console.log('ROUTE: POST NEW ROOM');
    try {
        res.send('ROUTE: POST NEW ROOMS');
    } catch (error) {
        next(error);
    }
}

export const getSingleRoom = async (req, res, next) => {
    console.log(`ROUTE: GET SINGLE ROOM with ID:${req.params.id}`);
    try {
        let { id } = req.params;
        conn.query(`SELECT * FROM rooms WHERE room_id = ${id};`, (err, rows, fields) => {
            res.send(rows);
        });
    } catch (error) {
        next(error);
    }
}

export const deleteRoom = async (req, res, next) => {
    console.log(`ROUTE: DELETE ROOM with ID:${req.params.id}`);
    try {
        res.send(`ROUTE: DELETE ROOM with ID:${req.params.id}`);
    } catch (error) {
        next(error);
    }
}

export const updateRoom = async (req, res, next) => {
    console.log(`ROUTE: PUT EXISTING ROOM with ID:${req.params.id}`);
    try {
        // const { id } = req.params;
        // const { name, job } = req.body;
        // const result = await schema.validateAsync({ name, job });

        res.send(`ROUTE: PUT EXISTING ROOM with ID:${req.params.id}`);
    } catch (error) {
        next(error);
    }
}