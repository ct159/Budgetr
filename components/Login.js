import React from 'react'
import {Form, Card, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <>
    <Container className='d-flex h-100'>
      <div className='w-100 my-auto' style={{ maxWidth: '400px', margin: 'auto'}}>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  required/>
                    </Form.Group>
                    <Form.Group id='email'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  required/>
                    </Form.Group>
                    <Button className='w-100 mt-3'type='submit'>Login</Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center'>Don't have an account? <Link to ='/signup'>Sign Up</Link></div>
        </Card>
      </div>
    </Container>
    </>
  )
}

export default Login
