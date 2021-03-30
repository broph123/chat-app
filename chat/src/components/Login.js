import React, {useRef} from 'react'
import {Form, Container, Button} from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid' ;

function Login({onIdSubmit}) {
    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId(){
        onIdSubmit(uuidv4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter your Id</Form.Label>
                    <Form.Control typer="text" ref={idRef} require/>
                    <Button type="submit" className="mr-2">Login</Button>
                    <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
                </Form.Group>

            </Form>
        

        </Container>
            
       
    )
}

export default Login
