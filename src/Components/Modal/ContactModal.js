import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactFormModal(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleClose = () => props.setIsOpen(false);
  let formCondition = false;

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitForm = () => {
    if (formData) {
      toast.success("We will connect to you soon", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
    }
  };

  return (
    <>
      <Modal
        show={props.isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Send your queries</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Full name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name eg. John Doe"
                autoFocus
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Email address</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              placeholder="name@example.com"
            >
              <Form.Label>
                <b>Your message</b>
              </Form.Label>
              <Form.Control
                name="message"
                onChange={(e) => handleChange(e)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={formCondition}
            variant="primary"
            onClick={handleSubmitForm}
          >
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default ContactFormModal;
