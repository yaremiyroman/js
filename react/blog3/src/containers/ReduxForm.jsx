import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setFormData } from '../slices/reduxFormSlice';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const FormField = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledFormLabel = styled((FormLabel))`
  margin-right: 20px;
  width: 100px;
  color: white;
`;

const GrandFormLabel = styled((StyledFormLabel))`
  width: 400px;
  text-align: left;
`;

const ariaLabels = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ReduxForm = () => {
  const { register, handleSubmit, formState: { errors, isValid }, formState } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setFormData(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <StyledFormLabel sx={{ color: 'white' }}>Full Name:</StyledFormLabel>
        <TextField
          error={!!errors.fullName}
          label="Full Name:"
          {...register("fullName", { required: 'Name required' })}
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
          }}
          placeholder="My Custom Placeholder"
        />
        {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName.message}</p>}
      </FormField>

      <FormField>
        <StyledFormLabel sx={{ color: 'white' }}>Email:</StyledFormLabel>
        <TextField
          error={!!errors.email}
          label="Email:"
          type="email"
          {...register("email", {
            required: 'Email required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
          }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </FormField>
      <FormField>
        <StyledFormLabel sx={{ color: 'white' }}>Age:</StyledFormLabel>
        <TextField
          error={!!errors.age}
          label="Age:"
          type="number"
          {...register("age", {
            required: 'Age required',
            min: { value: 18, message: 'Minimum age is 18' },
            max: { value: 99, message: 'Maximum age is 99' }
          })}
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
          }}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
      </FormField>


      <FormField>
        <StyledFormLabel sx={{ color: 'white' }} id="demo-row-radio-buttons-group-label">Gender</StyledFormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio sx={{ color: 'white' }} />}
            label="Female"
            {...register("gender", { required: 'Gender required' })}
          />
          <FormControlLabel
            value="male"
            control={<Radio sx={{ color: 'white' }} />}
            label="Male"
            {...register("gender")}
          />
        </RadioGroup>
        {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
      </FormField>




      <FormField>
        <Checkbox
          {...ariaLabels}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
          {...register("terms", { required: 'DO accept!' })}
          style={{ marginLeft: '13px' }}
        />
        <GrandFormLabel sx={{ color: 'white' }}>
          I accept the terms and conditions:
        </GrandFormLabel>
        {errors.terms && <p style={{ color: 'red' }}>{errors.terms.message}</p>}
      </FormField>

      <Divider />
      <Button variant="contained" type="submit" disabled={!isValid} style={{ marginTop: 20 }}>Submit</Button>
    </form>
  );
};

export default ReduxForm;
