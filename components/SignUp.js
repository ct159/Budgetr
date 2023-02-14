import React from 'react'
import {Form, Card, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <>
    <Container>
    <div className='w-100' style={{ maxWidth: '400px'}}>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  required/>
                </Form.Group>
                <Form.Group id='email'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  required/>
                </Form.Group>
                <Form.Group id='email'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="email" required/>
                </Form.Group>
                <Button className='w-100 mt-3'type='submit'>Login</Button>
            </Form>
        </Card.Body>
        <div className='w-100 text-center'>Already have an account? <Link to ='/'>Login</Link></div>
    </Card>
    </div>
    </Container>
    </>
  )
}

export default Login