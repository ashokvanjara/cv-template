import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { registoruser } from '../redux/actions/registrion';
import Flickr_logo from '../../assets/Loading/Flickr_logo.gif'
import style from '../../assets/Loading/style.css'
const getformvalues = () => {
  const storedValues = localStorage.getItem('form')
  if (!storedValues)
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      Confirmpassword: ""

    }
  return JSON.parse(storedValues)
}

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(getformvalues)
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const Data = useSelector((state) => state?.registor
    .registorData?.payload
  )
  console.log("Data is ", Data)

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(values));
  }, [])

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    }

    dispatch(registoruser(values))
    setValidated(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  function handleChange(event) {

    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }



  return (
    <div className='container mt-5'>
      {
        loading ? (
          <h1>Loading..........</h1>
        ) :
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* <Row className="mb-3"> */}
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="first_name" value={values.first_name} onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name" name='last_name' value={values.last_name} onChange={handleChange}

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Email" name='email' value={values.email} onChange={handleChange}

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password" name='password' value={values.password} onChange={handleChange}

              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>


            <Button type="submit w-30" className='btn-regi mt-4' >Submit form</Button>
            {/* </Row> */}
          </Form>
      }
    </div>
  )
}

export default Signup