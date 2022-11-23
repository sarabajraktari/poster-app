import Joi from "joi";

export const UserValidatorSchema = (): Joi.ObjectSchema =>

    Joi.object({
        username: Joi.string().alphanum().min(3).required().messages({
            "string.empty": "Username cannot be empty.",
        }),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).messages({
            "string.empty": "Email cannot be empty"
        }),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).messages({
            "string.empty": "Password cannot be empty"
        })
    })


export const LoginValidatorSchema = (): Joi.ObjectSchema => {
    return Joi.object({
        email: Joi.string().required().messages({
            "string.empty": "Email cannot be empty"
        }),
        password: Joi.string().required().messages({
            "string.empty": "Password cannot be empty"
        })
    });
}