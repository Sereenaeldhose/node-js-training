const express = require('express');
const { body, validationResult } = require('express-validator');

const validateUserInput = ()=>{
    return  [
        body('name').notEmpty().withMessage("Name must not be empty"),
        body('username').isEmail().withMessage("Invalid email provided"),
        body('password').isLength({ min: 6 }).withMessage("Password length should be min 6"),
    ];
}

const validate = (req, res, next) => {
  
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }

  module.exports = {validateUserInput,validate}