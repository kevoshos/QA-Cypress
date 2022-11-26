import loginPage from "../pages/login.page.cy"
import inventoryPage from "../pages/inventory.page.cy"
import customerInfoPage from "../pages/customerInfo.page.cy"
import checkoutOverviewPage from "../pages/overview.page.cy"
import cartPage from "../pages/cart.page.cy"
import logAccountFixture from "../fixtures/log-account.json"
import customerInfoFixture from "../fixtures/customer-information.json"

describe("End to end cart shopping scenarios", () =>{
    const{ authorized_username, standard_password} = logAccountFixture
    const{first_name, last_name, zip_code} = customerInfoFixture

    beforeEach(()=>{
        cy.visit('/')
        loginPage.elements.userNameInput() 
    .should('be.visible')
    .type(authorized_username)
    loginPage.elements.passwordInput()
    .should('be.visible')
    .type(standard_password)
    loginPage.elements.loginButton()
    .should('exist')
    .click()
    inventoryPage.elements.productsHeading()
    .should('exist')
    })


it("Verify E2E purchase of a product through the Shopping cart ", () => {
    let itemName
    // Get product info and add it to the cart
    inventoryPage.elements.inventoryItemName()
    .invoke('text')
    .then(text => itemName = text)
    inventoryPage.elements.addBackPackButton()
    .click()
    inventoryPage.elements.shoppingCart()
    .should('contain','1')
    .click()
    // Validate product and continue purchase
    cartPage.elements.cartHeading()
    .should('exist')
    .should('have.text', 'Your Cart')
    inventoryPage.elements.inventoryItemName()
    .invoke('text')
    .then(itemNameOnCart => expect(itemNameOnCart).to.equal(itemName))
    cartPage.elements.checkoutButton()
    .should('be.enabled')
    .click()
    // Add customer information
    customerInfoPage.elements.infoHeader()
    .should('exist')
    .should('have.text', 'Checkout: Your Information')
    
   customerInfoPage.fillCustomerInfo(first_name,last_name,zip_code)
    // Overview and complete order
    checkoutOverviewPage.elements.overviewHeader()
    .should('exist')
    .should('have.text','Checkout: Overview')
    checkoutOverviewPage.elements.finishButton()
    .should('be.enabled')
    .click()
    checkoutOverviewPage.elements.checkoutComplete()
    .should('be.visible')
})

it("Remove item from cart shop", () => {

    inventoryPage.elements.addBackPackButton()
    .click()
    inventoryPage.elements.shoppingCartLink()
    .click()
    cartPage.elements.removeCartButton()
    .should('exist')
    .and('be.enabled')
    .click()
    cartPage.elements.itemRemovedDiv()
    .should('exist')
    cartPage.elements.continueShoppingButton()
    .should('exist')
    .and('be.enabled')
    .click()
    inventoryPage.elements.shoppingCartLink()
    .should('not.have.have.class','shopping_cart_badge')
    .and('not.contain.text', '1')
})


})