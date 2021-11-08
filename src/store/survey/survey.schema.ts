import Joi from "joi";

/**
 * Joi Schema Object
 *
 * @constant {JoiSchema} surveyIdentitySchema
 */
export const surveyIdentitySchema = Joi.object({
  name: Joi.string().optional().allow(""),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .allow("")
    .optional(),
});

/**
 * Joi Schema Object
 *
 * @constant {JoiSchema} surveyDetailsSchema
 */
export const surveyDetailsSchema = Joi.object({
  age: Joi.string().required(),
  gender: Joi.string().required(),
});

/**
 * Joi Schema Object
 *
 * @constant {JoiSchema} surveyFavoritesSchema
 */
export const surveyFavoritesSchema = Joi.object({
  book: Joi.string().required(),
  colors: Joi.array().min(1).required(),
});

/**
 * Joi Schema Object
 *
 * @constant {JoiSchema} surveySchema
 */
export const surveySchema = Joi.object({
  identity: surveyIdentitySchema.required(),
  details: surveyDetailsSchema.required(),
  favorites: surveyFavoritesSchema.required(),
});
