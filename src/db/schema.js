import Joi from 'joi';

export const guestSchema = Joi.object({
    room_id: Joi.number()
        .min(1)
        .required(),
    full_name: Joi.string()
        .min(3)
        .max(100)
        .required(),
    tc_no: Joi.string()
        .min(11)
        .max(11),
    origin_city: Joi.string()
        .min(3)
        .max(50),
    duty: Joi.string()
        .min(3)
        .max(100),
    phone: Joi.string()
        .min(10)
        .max(10),
    check_in_date: Joi.date()
        .min('01-01-2020')
        .max('01-01-2030'),
    check_out_date: Joi.date()
        .min('01-01-2020')
        .max('01-01-2030'),
    current: Joi.number()
        .min(0)
        .max(1)
        .default(1),
    child: Joi.number()
        .min(0)
        .max(1)
        .default(0),
    description: Joi.string()
        .max(100)
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
        .max(100),
});