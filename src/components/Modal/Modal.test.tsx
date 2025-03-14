import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

const mockPerson = {
  _id: "368YCC2THQH1HEAQ",
  name: "Kiana Yoo",
  email: "palma14@hotmail.com",
  dob: "2021-05-31",
  verified: true,
  salary: 31900,
  address: {
    street: "2745 Shaftsbury Circle",
    town: "Slough",
    postcode: "LS67 1ID",
  },
  telephone: "+39-3380-033-155",
  pets: ["Sadie", "Rosie"],
  score: 3.7,
  url: "http://earth.com",
  description:
    "strips rt administrators composer mumbai warranty tribunal excited halo costumes surgery series spare ticket monitored whose criminal screens enrollment range",
};

test("renders modal with person details", () => {
  render(<Modal person={mockPerson} onClose={() => {}} />);

  expect(screen.getByText("Kiana Yoo")).toBeInTheDocument();
  expect(screen.getByText("palma14@hotmail.com")).toBeInTheDocument();
  expect(screen.getByText("+39-3380-033-155")).toBeInTheDocument();
});

test("calls onClose when close button is clicked", () => {
  const onCloseMock = jest.fn();
  render(<Modal person={mockPerson} onClose={onCloseMock} />);

  fireEvent.click(screen.getByText("Close"));
  expect(onCloseMock).toHaveBeenCalled();
});
