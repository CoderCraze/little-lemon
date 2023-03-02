import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("submission is disabled if name is not entered", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button");
    submitButton.click();
    expect(handleSubmit).not.toHaveBeenCalled();
  });
  test("submission is disabled if email is not entered", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button");
    submitButton.click();
    expect(handleSubmit).not.toHaveBeenCalled();
  });
  test("submission is disabled if time is not entered", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button");
    submitButton.click();
    expect(handleSubmit).not.toHaveBeenCalled();
  });
  test("submission is disabled if booked time is not avaiable", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button");
    submitButton.click();
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
