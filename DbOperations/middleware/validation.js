const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
    console.log("Inside userValidationRules");
  return [
    // name must be at least 3 chars long
    body('name').isLength({ min: 3 }),
    // email must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
  ]
}

const validate = (req, res, next) => {
    console.log("Inside validate");
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}
