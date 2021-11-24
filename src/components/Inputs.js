import React from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { v4 as uuidv4 } from 'uuid';

export const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'notes'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

export const renderCheckbox = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      
      label={label}
    />
)

export const radioButton = ({ input, options=[{name: "Female"},{name: "Male"}, {name: "other"} ], ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      {options.map((option) => <FormControlLabel key ={uuidv4()} value={option.name} control={<Radio key={uuidv4()} />} label={option.name} />)}
    </RadioGroup>
  </FormControl>
)

export const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  options=[ {name: "isral"},{name: "U.S.A"}, {name: "other"} ],
  ...custom
}) => (
  <FormControl  error={touched && error}>
    <InputLabel className="inputLabel" htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      className="select"
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}
    >
      {options.map((option) => <option key={uuidv4()} value={option.name}>{option.name}</option>)}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)
