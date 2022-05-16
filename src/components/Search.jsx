import React from 'react';
import { useFormik } from 'formik';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { searchProductAsync } from '../redux/actions/actionProduct';

const Search = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object({
      search: Yup.string().required('Campo Requerido')
    }),
    onSubmit: ({ search }) => {
      console.log(search)
      dispatch(searchProductAsync(search))
    }
  })
  return (
    <div>
      <center>
        <Form className="d-flex" onSubmit={formik.handleSubmit}>
          <FormControl
            type="search"
            name="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={formik.handleChange} />
          <Button type="submit" name="searched" variant="outline-success">Search</Button>
        </Form>
      </center>
    </div>
  );
};
export default Search;