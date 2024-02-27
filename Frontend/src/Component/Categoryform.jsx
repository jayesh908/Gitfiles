import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CategoryForm({onSubmit,value,setvalue}) {
   
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Enter New Category"  value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CategoryForm;