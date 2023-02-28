import { Guest } from '../models/guests.model.js'
import { guestSchema } from "../db/schema.js"

export const getGuests = (req, res, next) => {
    Guest.getGuests(req, res, next)
}

export const addGuest = (req, res, next) => {
    try {
        // let params = guestSchema.validateAsync({ room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description })

        let newGuest = Guest({
            room_id: req.body.room_id,
            full_name: req.body.full_name,
            tc_no: req.body.tc_no,
            origin_city: req.body.origin_city,
            duty: req.body.duty,
            phone: req.body.phone,
            check_in_date: req.body.check_in_date,
            check_out_date: req.body.check_out_date,
            current: req.body.current,
            child: req.body.child,
            description: req.body.description
        })

        Guest.addGuest(newGuest, req, res, next);
    }
    catch (err) {
        next(err);
    }
}

export const getSingleGuest = async (req, res, next) => {
    let { id } = req.params;
    conn.query(`SELECT * FROM guests WHERE guest_id = ${id};`, (err, rows, fields) => {
        res.send(rows);
    })
}

export const deleteGuest = async (req, res, next) => {
    try {
        let { id } = req.params;
        conn.query(`DELETE FROM guests WHERE guest_id = ${id}`);
        res.send(`Guest with ID:${id} deleted successfully.`);
    } catch (error) {
        next(error);
    }
}

export const updateGuest = async (req, res, next) => {
    console.log(`ROUTE: PUT EXISTING GUEST with ID:${req.params.id}`);
    try {
        res.send(`ROUTE: PUT EXISTING GUEST with ID:${req.params.id}`);
    } catch (error) {
        next(error);
    }
}