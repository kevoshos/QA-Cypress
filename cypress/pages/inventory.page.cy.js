class inventory{
    elements = {
        productsHeading: () => cy.get('.title').findByText("Products"),
        addBackPackButton: () => cy.get('.inventory_container').contains("[data-test*='sauce-labs-backpack']","Add to cart"),
        inventoryItemName: () => cy.get('.inventory_item_name').eq(0),
        addBoltTShirtButton:() => cy.get('.inventory_container').contains("[data-test*='bolt-t-shirt']","Add to cart"),
        shoppingCartValue: () => cy.get('.shopping_cart_link').find("span[class='shopping_cart_badge']"),
        shoppingCartLink: () => cy.get('.shopping_cart_link')
    }

}
    export default new inventory()
