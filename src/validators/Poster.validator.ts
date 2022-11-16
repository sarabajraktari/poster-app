import Joi from "joi";

export const PosterValidatorSchema = (): Joi.ObjectSchema =>

    Joi.object({
        title: Joi.string().min(4).required().messages({
            "string.empty": "At least title cannot be empty."
        }),

    })