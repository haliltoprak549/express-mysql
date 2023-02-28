import { Guest } from '../models/guests.model.js'
import { guestSchema } from "../db/schema.js"

export const getGuests = (req, res, next) => {
    Guest.getGuests(req, res, next)
}

export const addGuest = (req, res, next) => {
    try {
        let { room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description } = req.body

        let result = guestSchema.validate({ room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description })
        let { error } = result

        if (error) {
            let validationError = new Error(error.message)
            next(validationError)
        }
        else {
            let { value } = result
            let newGuest = new Guest({
                room_id: value.room_id,
                full_name: value.full_name,
                tc_no: value.tc_no,
                origin_city: value.origin_city,
                duty: value.duty,
                phone: value.phone,
                check_in_date: value.check_in_date,
                check_out_date: value.check_out_date,
                current: value.current,
                child: value.child,
                description: value.description
            })

            newGuest.addGuest(req, res, next)
        }
    } catch (err) {
        next(err)
    }
}

export const getGuestByID = (req, res, next) => {
    try {
        let { id } = req.params;
        Guest.getGuestByID(id, req, res, next)
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

        let { room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description } = req.body

        let result = guestSchema.validate({ room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description })
        let { error } = result

        if (error) {
            let validationError = new Error(error.message)
            next(validationError)
        }
        else {
            let { value } = result
            let guest = new Guest({
                room_id: value.room_id,
                full_name: value.full_name,
                tc_no: value.tc_no,
                origin_city: value.origin_city,
                duty: value.duty,
                phone: value.phone,
                check_in_date: value.check_in_date,
                check_out_date: value.check_out_date,
                current: value.current,
                child: value.child,
                description: value.description
            })

            guest.updateGuest(id, req, res, next)
        }
    } catch (err) {
        next(err)
    }
}