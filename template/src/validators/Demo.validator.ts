/**
 * !Validators should not have default exports
 */
import Joi from 'joi';

export const DemoValidator = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  repeat_password: Joi.ref('password'),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
});
