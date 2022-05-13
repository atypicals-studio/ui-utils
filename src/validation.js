import { useState } from 'react'

const isNotEmpty = (value) => {
  return value !== null && value !== undefined && value.toString().length > 0
}

const isEmail = (value) => {
  return (
    value && /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\-.]+$/.test(value)
  )
}

const runValidatorsFromKeys = (validators, keys) => {
  const validations = {}
  keys.forEach((key) => {
    validations[key] = !validators[key]()
  })
  return validations
}

const useValidation = (validators) => {
  function buildErrorsState() {
    const errorsState = {}
    const stateKeys = Object.keys(validators)
    for (let i = 0; i < stateKeys.length; i++) {
      errorsState[stateKeys[i]] = false
    }
    return errorsState
  }
  const [validationErrors, setValidationErrors] = useState(buildErrorsState())
  function validate(keys) {
    setValidationErrors({
      ...validationErrors,
      ...runValidatorsFromKeys(validators, keys),
    })
  }
  function validateAll() {
    validate(Object.keys(validationErrors))
    return Object.values(validators).every((v) => v())
  }
  return { validate, validateAll, validationErrors }
}

export { useValidation, runValidatorsFromKeys, isNotEmpty, isEmail }
