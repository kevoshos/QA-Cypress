
class customerInfo{
    elements = {
        infoHeader: () => cy.findByText('Checkout: Your Information'),
        firstName: () => cy.findByPlaceholderText('First Name'),
        lastName: () => cy.findByPlaceholderText('Last Name'),
        zipCode: () => cy.findByPlaceholderText('Zip/Postal Code'),
        continueButton: () => cy.findByRole('button',{name: /Continue/i}),
        overviewHeader: () => cy.findByText('Checkout: Overview'),

    }

    fillCustomerInfo(firstName, lastName, zipCode){
        this.elements.firstName()
        .should('exist')
        .type(firstName)
        this.elements.lastName()
        .should('exist')
        .type(lastName)
        this.elements.zipCode()
        .should('exist')
        .type(zipCode)
        this.elements.continueButton()
        .should('be.enabled')
        .click()
       
    }

}
export default new customerInfo