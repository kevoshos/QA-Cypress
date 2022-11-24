class checkoutOverview{
    elements = {
        overviewHeader: () => cy.findByText('Checkout: Overview'),
        finishButton: () => cy.findByRole('button', {name: /finish/i}),
        checkoutComplete: () => cy.findByText('Checkout: Complete!')
    }

}

export default new checkoutOverview