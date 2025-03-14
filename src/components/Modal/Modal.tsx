import React from "react";
import './Modal.css'

type ModalProps = {
  person: any;
  onClose: () => void;
};

const Modal = ({ person, onClose }: ModalProps) => {
  if (!person) return null;

  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>{person.name}</h2>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>DOB:</strong> {person.dob}</p>
      <p><strong>Verified:</strong> {person.verified ? "Yes" : "No"}</p>
      <p><strong>Salary:</strong><td>{new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(person.salary)}</td></p>
      <p><strong>Address:</strong> {person.address.street}, {person.address.town}, {person.address.postode}</p>
      <p><strong>Telephone:</strong> {person.telephone}</p>
      <p><strong>Score:</strong> {person.score}</p>
      <p><strong>Website:</strong> <a href={person.url} target="_blank" rel="noopener noreferrer">{person.url}</a></p>
      <p><strong>Description:</strong> {person.description}</p>
      <p><strong>Pets:</strong> {person.pets.join(", ")}</p>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  </div>
  );
};

export default Modal;