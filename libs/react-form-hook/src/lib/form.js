import { useState } from 'react';
import useBetaErrors from './errors.js';
import validate from 'validate.js';
import result from 'lodash/result';

function resolve(path, obj) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null;
  }, obj);
}

function setByDot(obj, path, val) {
  path.split('.').reduce(function (prev, curr, _idx, _arr) {
    if (_idx === _arr.length - 1 && prev) {
      prev[curr] = val;
    }

    return prev ? prev[curr] : null;
  }, obj);

  return obj;
}

export default function (initial) {
  const [value, setValue] = useState(initial);
  const [rules, setRules] = useState({});
  const [busy, setBusy] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const errors = useBetaErrors();

  return {
    value,
    setValue,
    errors,
    busy,
    setValidationRules: (v) => {
      setRules(v);
    },
    validate: () => {
      setBusy(true);
      let validateJsErrors = validate(value, rules);

      if (validateJsErrors === undefined) {
        errors.set({});
      } else {
        errors.set(validateJsErrors);
      }
      setBusy(false);
      return validateJsErrors === undefined ? true : false;
    },
    validateSingleField: (v, key) => {
      setBusy(true);

      let fieldRules = result(rules, key);

      let validateJsErrorsForField = validate.single(v, fieldRules);
      if (validateJsErrorsForField === undefined) {
        errors.popError(key);
      } else {
        errors.push({
          [key]: validateJsErrorsForField,
        });
      }
      setBusy(false);
      return validateJsErrorsForField === undefined ? true : false;
    },
    setField: (k, v) =>
      setValue((s) => {
        s = setByDot(s, k, v);
        s = s;
        return { ...s };
      }),
    startProcessing: () => {
      errors.forget();
      setBusy(true);
      setSuccessful(false);
    },
    finishProcessing: () => {
      setBusy(false);
      setSuccessful(true);
    },
    resetStatus: () => {
      errors.forget();
      setBusy(false);
      setSuccessful(false);
    },
    setErrors: (data) => {
      // console.log("data", data);
      errors.set(data);
      setBusy(false);
    },
    pushError: (data) => {
      errors.push(data);
      setBusy(false);
    },
    forgetErrors: (data) => {
      errors.set({});
      setBusy(false);
    },
    removeError: (data) => {
      errors.popError(data);
      setBusy(false);
    },
    getField: (field) => {
      return resolve(field, value);
    },
  };
}
