import loginPage from "../pages/login.page.cy"
import inventoryPage from "../pages/inventory.page.cy"
import logAccountFixture from "../fixtures/log-account.json"


describe("Login Test Scenarios with three existing roles", () =>{
    const{ authorized_username, problem_username, unauthorized_username,standard_password } = logAccountFixture
    beforeEach(()=>{
        cy.visit('/')
    })


it("Verify unauthorized accounts login", () => {

    loginPage.elements.userNameInput() 
    .should('be.visible')
    .type(unauthorized_username)
    loginPage.elements.passwordInput()
    .should('be.visible')
    .type(standard_password)
    loginPage.elements.loginButton()
    .should('exist')
    .click()
    cy.findByText("Epic sadface: Sorry, this user has been locked out.")
    .should('be.visible')
    
})

it("Verify problem user account gets redirected to inventory", () =>{
    loginPage.elements.userNameInput()
    .should('be.visible')
    .type(problem_username)
    loginPage.elements.passwordInput()
    .should('be.visible')
    .type(standard_password)
    loginPage.elements.loginButton()
    .should('exist')
    .click()
    cy.url()
    .should('eq', 'https://www.saucedemo.com/inventory.html')
    inventoryPage.elements.productsHeading()
    .should('exist')
})

it("Verify standard user account gets redirected to inventory", () =>{
    loginPage.elements.userNameInput()
    .should('be.visible')
    .type(authorized_username)
    loginPage.elements.passwordInput()
    .should('be.visible')
    .type(standard_password)
    loginPage.elements.loginButton()
    .should('exist')
    .click()
    cy.url()
    .should('eq', 'https://www.saucedemo.com/inventory.html')
    inventoryPage.elements.productsHeading()
    .should('exist')
})

})