import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    //Arrange
    const formHeader = screen.getByText(/checkout form/i);
    //Act
    //Assert
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    //Arrange
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipCodeInput = screen.getByLabelText(/zip:/i);
    const submitBtn = screen.getByTestId(/submitbtn/i)

    //Act
    fireEvent.click(submitBtn);

    //Assert
    const successMessage = screen.getByText(/woo-hoo/i);
    expect(successMessage).toBeInTheDocument();

});
