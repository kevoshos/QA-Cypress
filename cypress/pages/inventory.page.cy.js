class inventoryPage{
    elements = {
        productsHeading: () => cy.get('.title').findByText("Products"),    
        }
    
    }
    
    export default new inventoryPage()
    