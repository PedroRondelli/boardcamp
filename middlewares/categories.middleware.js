import joi from "joi";

const categorieSchema = joi.object({
  name: joi.string().min(3),
});

export function categorieValidation(req, res, next) {
  const validation = categorieSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
