class cart{
    elements = {
        cartHeading: () =>  cy.get('.header_secondary_container').findByText('Your Cart'),
        checkoutButton: () => cy.get('.cart_footer').findByRole('button', {name:/checkout/i}),
        cartItemName: () => cy.get('.inventory_item_name'),
        removeCartButton: () => cy.findByRole('button', {name: /Remove/i}),
        itemRemovedDiv: () => cy.get('.removed_cart_item'),
        continueShoppingButton: () => cy.findByRole('button', {name:/Continue Shopping/i})
    }
}

export default new cart