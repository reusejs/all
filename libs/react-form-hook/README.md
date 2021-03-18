## @reusejs/react-form-hook

react-form-hook is a package for reactJs which simplifies form handling process.
it simplifies the implementaion of form validation and error.handling.
  

## Get Started


### Install the package with your package manager

`$ npm i @reusejs/react-form-hook`

or

`$ yarn add @reusejs/react-form-hook`

  

### Install the dependencies for this package

- https://www.npmjs.com/package/lodash

- https://www.npmjs.com/package/validate.js

  

### API

#### Form Processing
| Function         | Description                                                                                                                | Usage                             |
|------------------|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| setField         | sets the value of a field in the form Object.                                                                              | `form.setField('name', 'Jon Doe');` |
| getField         | gets the value of a field in the form Object                                                                               | `form.getField('name'); `           |
| busy             | indicates when a form is processing action. We can access this flag in the component and show a loader based on its value. | `form.busy`                        |
| startProcessing  | sets busy flag as true. Clears Errors Object.                                                                              | `form.startProcessing();`          |
| finishProcessing | sets busy flag as false.                                                                                                   | `form.finishProcessing();`      |
| resetStatus      | resets the errors object in the form, and sets busy flag to false                                                          | `form.resetStatus()`                |


#### Validation
| Function            | Description                                                                                                                                             | Usage                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| setValidationRules  | Set validation Rules for the form. Expects a validateJs Constraints Format.                                                                             | `form.setValidationRules(constraints);` |
| validate            | Validate the complete form object based on the constraints defined. Sets the error object for each field. Returns true if no errors, else returns false | `form.validate();`                      |
| validateSingleField | Validate a single field of a form object and sets the Error for this field. Returns true if no errors, else returns false                               | `form.validateSingleField('email');`    |


#### Errors
| Function     | Description                                                                                                 | Usage                            |
|--------------|-------------------------------------------------------------------------------------------------------------|----------------------------------|
| setErrors    | sets errors for the form fields.<br>You can set errors manually if you are not using Validate functionality | `form.setErrors(errors)`         |
| pushError    | append errors to the existing form errors object.                                                           | `form.pushError(newErrorObject)` |
| forgetErrors | clear the errors object for the form.                                                                       | `form.forgetErrors()`            |
| hasErrors    | checks if the a form object hasErrors or not.                                                               | `form.errors.hasErrors()`        |
| has          | checks if a particular field of the form has errors.                                                        | `form.errors.has('email')`       |
| all          | gets all the errors of the form object.                                                                     | `form.errors.all()`              |
| flatten      | Flattens the Error object and get all the error messages in form of an array.                               | `form.errors.flatten()`          |
| get          | get errors for a single field.                                                                              | `form.errors.get('email')`       |


### Usage
```jsx
import React, { useEffect } from "react";
import useBetaForm from "@reusejs/react-form-hook";

// Define Validation Rules for the form fields (Refer to validateJs)

const constraints = {
  name: {
    presence: { allowEmpty: false, message: "this field is required" },
  },
  email: {
    presence: { allowEmpty: false, message: "this field is required" },
  },
  phone_number: {
    presence: { allowEmpty: false, message: "this field is required" },
  },
};

export default function App() {
  // initialise form object
  const form = useBetaForm({
    name: "",
    email: "",
    phone_number: "",
  });

  // set validation rules for the form when the component is mounted.
  useEffect(() => {
    form.setValidationRules(constraints);
  }, []);

  const handleSubmit = () => {
    // validate the all the form fields
    const valid = form.validate();
    if (valid) {
      // make api call
    }
  };

  const validateEmail = (email) => {
    // validate single form field
    const isValid = form.validateSingleField("email");
  };

  return (
    <div className="App">
      <form>
        <div className="form-el-wrapper">
          <label className="label" htmlFor="name">
            Name
          </label>
          <br />
          <input
            name="name"
            value={form.getField("name")}
            id="name"
            onChange={(v) => {
              form.setField("name", v.target.value);
            }}
          />
          {form.errors.has("name") && (
            <div className="error">{form.errors.get("name")[0]}</div>
          )}
        </div>
        <br />

        <div className="form-el-wrapper">
          <label className="label" htmlFor="email">
            Email
          </label>
          <br />
          <input
            name="email"
            value={form.getField("email")}
            id="email"
            type="email"
            onChange={(v) => {
              form.setField("email", v.target.value);
            }}
            onBlur={(v) => validateEmail(v.target.value)}
          />
          {form.errors.has("email") && (
            <div className="error">{form.errors.get("email")[0]}</div>
          )}
        </div>
        <br />
        <div className="form-el-wrapper">
          <label htmlFor="phone_number">Phone Number</label>
          <br />
          <input
            name="phone_number"
            value={form.getField("phone_number")}
            id="phone_number"
            onChange={(v) => {
              form.setField("phone_number", v.target.value);
            }}
          />

          {form.errors.has("phone_number") && (
            <div className="error">{form.errors.get("phone_number")[0]}</div>
          )}
        </div>
        <br />
        <button type="button" onClick={() => handleSubmit()}>
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
```