import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddTaskModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* AddForm component will go here */}
            </Modal.Body>
        </Modal>
    );
};

export default AddTaskModal;
