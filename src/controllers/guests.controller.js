import { Guest } from '../models/guests.model.js'
import { guestSchema } from "../db/schema.js"

export const getGuests = (req, res, next) => {
    Guest.getGuests(req, res, next)
}

export const addGuest = (req, res, next) => {
    try {
        // let params = guestSchema.validateAsync({ room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description })

        let newGuest = new Guest({
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

        newGuest.addGuest(req, res, next)
    } catch (err) {
        next(err)
    }
}

export const getSingleGuest = (req, res, next) => {
    try {
        let { id } = req.params;
        Guest.getSingleGuest(id, req, res, next)
    } catch (err) {
        next(err)
    }
}

export const deleteGuest = (req, res, next) => {
    try {
        let { id } = req.params;
        Guest.deleteGuest(id, req, res, next)
    } catch (err) {
        next(err)
    }
}

export const updateGuest = (req, res, next) => {
    try {
        let { id } = req.params
        
        let newGuest = new Guest({
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

        newGuest.updateGuest(id, req, res, next)
    } catch (err) {
        next(err)
    }
}