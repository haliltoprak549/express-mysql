import Joi from 'joi';

export const guestSchema = Joi.object().keys({
    room_id: Joi.number()
        .min(1)
        .required(),
    full_name: Joi.string()
        .min(3)
        .max(100)
        .required(),
    tc_no: Joi.string()
        .min(11)
        .max(11)
        .allow(null),
    origin_city: Joi.string()
        .min(3)
        .max(50)
        .allow(null),
    duty: Joi.string()
        .min(3)
        .max(100)
        .allow(null),
    phone: Joi.string()
        .min(10)
        .max(10)
        .allow(null),
    check_in_date: Joi.date()
        .iso()
        .min('01-01-2020')
        .max('01-01-2030')
        .allow(null),
    check_out_date: Joi.date()
        .iso()
        .min('01-01-2020')
        .max('01-01-2030')
        .allow(null),
    current: Joi.number()
        .min(0)
        .max(1)
        .allow(null)
        .empty(null) // empty the null values and set default value
        .default(1),
    child: Joi.number()
        .min(0)
        .max(1)
        .allow(null)
        .empty(null)
        .default(0),
    description: Joi.string()
        .max(100)
        .allow(null)
});

export const roomSchema = Joi.object({
    room_no: Joi.string()
        .min(1)
        .max(5)
        .required(),
    bed_capacity: Joi.number()
        .min(0)
        .max(15)
        .required(),
    available_beds: Joi.number()
        .min(0)
        .max(15)
        .required(),
    description: Joi.string()
        .max(100)
        .allow(null),
});