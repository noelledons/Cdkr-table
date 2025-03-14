import React from "react";
import "./Modal.css";

type Address = {
  street: string;
  town: string;
  postcode: string;
};

type Person = {
      _id: string;
      name: string;
      dob: string;
      email: string;
      verified: boolean;
      salary: number;
      address: Address;
      telephone: string;
      score: number;
      url: string;
      description: string;
      pets: string[];
}

type ModalProps = {
  person: Person;
  onClose: () => void;
};

const Modal = ({ person, onClose }: ModalProps) => {
  if (!person) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{person.name}</h2>
        <p className="modal-data">
          <strong>Email:</strong> {person.email}
        </p>
        <p className="modal-data">
          <strong>DOB:</strong> {person.dob}
        </p>
        <p className="modal-data">
          <strong>Verified:</strong> {person.verified ? "Yes" : "No"}
        </p>
        <p className="modal-data">
          <strong>Salary:</strong>
          <span>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(person.salary)}
          </span>
        </p>
        <p className="modal-data">
          <strong>Address:</strong> {person.address.street},
          {person.address.town}, {person.address.postcode}
        </p>
        <p className="modal-data">
          <strong>Telephone:</strong> {person.telephone}
        </p>
        <p className="modal-data">
          <strong>Score:</strong> {person.score}
        </p>
        <p className="modal-data">
          <strong>Website:</strong>{" "}
          <a href={person.url} target="_blank" rel="noopener noreferrer">
            {person.url}
          </a>
        </p>
        <p className="modal-data">
          <strong>Description:</strong> {person.description}
        </p>
        <p className="modal-data">
          <strong>Pets:</strong> {person.pets.join(", ")}
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
