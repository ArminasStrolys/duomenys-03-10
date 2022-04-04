import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { auth, resetPw } from '../../../services/authServices';



const Reset = () => {
    const [email, setEmail] = useState('')
    const submitHandler = (e)=>{
e.preventDefault()
resetPw(email)
    }
    return (
<>
    <h2 className='mt-3 text-center'>Lost password</h2>
    <Form className='mx-auto col-sm-6' onSubmit={submitHandler}>
        <Form.Group className='mb-3'>
<Form.Control type='text' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>Remind me</Button>
    </Form>
</>
    );
}

export default Reset;
