import Joi from "joi"
import { guestSchema } from "./db/schema.js"

export let test = (req, res, next) => {
    let { room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description } = req.body

    let result = guestSchema.validate({ room_id, full_name, tc_no, origin_city, duty, phone, check_in_date, check_out_date, current, child, description })
    let { error } = result

    if (error) console.log(error.message)
    else {
        let { value } = result
        console.log(value)
    }

    res.send()
}