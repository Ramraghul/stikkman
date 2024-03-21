//Require Imports;
import Joi from "joi";

//Course Create Validation;
export const validateCreateCourse = Joi.object({
    thumbnail: Joi.string().required(),
    name: Joi.string().required(),
    author: Joi.string().required(),
    description: Joi.string().allow(""),
})

//Course Update Validation;
export const validateUpdateCourse = Joi.object({
    thumbnail: Joi.string().allow(""),
    name: Joi.string().allow(""),
    author: Joi.string().allow(""),
    description: Joi.string().allow(""),
})