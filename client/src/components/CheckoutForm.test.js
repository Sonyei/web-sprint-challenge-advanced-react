import React from "react";
import { screen, getByLabelText, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
        getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)
    
        //Act

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)

    userEvent.type(firstNameInput, 'Angel')
    userEvent.type(lastNameInput, 'AngelLN')


    const button = screen.getByRole("button")
    userEvent.click(button);


        //Assert

    // expect(screen.getByText(/Angel/i).toBeinTheDocument();
    // expect(screen.getByText(/AngelLN/i).toBeinTheDocument();

});
