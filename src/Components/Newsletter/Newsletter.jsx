import "./Newsletter.css";
import {Form, Button, Container } from "react-bootstrap";

export function NewsLetter({ prop }) {
    return (
    <Container className=" d-flex justify-content-center custom-container">
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <div className="text-center mb-4 text-container">
          <h1 className="header">{prop.title}</h1>
          <p>{prop.text}</p>
        </div>

        <Form>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="formFirstName" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="formLastName" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button type="submit" className="w-100" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>Submit</Button>
        </Form>
      </div>
    </Container>
  );
}

export default NewsLetter;
