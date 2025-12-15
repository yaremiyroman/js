import { useDispatch } from 'react-redux';
import { setFormFormikData } from '../slices/formikFormSlice';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  age: yup.number().min(18, 'You must be at least 18 years old').max(99, 'You must be at MAX 99 years old').required('Age is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});


const initialValues = {
  name: '',
  email: '',
  age: '',
  terms: false
}

const FormikForm = () => {

  const dispatch = useDispatch();

  const onSubmit = (data, { setSubmitting, resetForm }) => {
    dispatch(setFormFormikData(data));
    console.log(data);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, dirty, touched }) => (
        <Form>
          {(console.log('touched > ', touched))}
          <div>
            <label htmlFor="name">Full Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <Field type="number" id="age" name="age" />
            <ErrorMessage name="age" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="terms" />
              Accept Terms  and Conditions
            </label>
            <ErrorMessage name="terms" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" disabled={!isValid} >
            Submit
          </button>
        </Form>
      )}
    </Formik>


  );
};

export default FormikForm;
