import React from 'react';
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    screen.getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)
    
        //Act

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type(firstNameInput, 'Angel')
    userEvent.type(lastNameInput, 'AngelLN')
    userEvent.type(addressInput, 'Angel Street 404')
    userEvent.type(cityInput, 'Cityvilleton')
    userEvent.type(stateInput, 'AV')
    userEvent.type(zipInput, '40404')

    const button = screen.getByRole("button")
    userEvent.click(button);

    const showSuccessMessage = screen.getByText(/Woo-hoo!/i)

        //Assert

    expect(showSuccessMessage).toBeTruthy()

});
