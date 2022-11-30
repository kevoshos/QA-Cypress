import loginPage from "../pages/login.page.cy"
import inventoryPage from "../pages/inventory.page.cy"
import logAccountFixture from "../fixtures/log-account.json"


describe("Login Test Scenarios with three existing roles", () =>{
    const{ authorized_username, problem_username, unauthorized_username,standard_password } = logAccountFixture
    beforeEach(()=>{
        cy.visit('/')
        loginPage.elements.userNameInput().invoke('show').as('userName')
        loginPage.elements.passwordInput().invoke('show').as('password')
        loginPage.elements.loginButton().invoke('show').as('login')

    })


it("Verify unauthorized accounts login", () => {

    cy.get('@userName')
    .should('be.visible')
    .type(unauthorized_username)
    cy.get('@password')
    .should('be.visible')
    .type(standard_password)
    cy.get('@login')
    .should('exist')
    .click()
    loginPage.elements.unauthorizedMessage()
    .should('be.visible')
    
})

it("Verify problem user account gets redirected to inventory", () =>{
    cy.get('@userName')
    .should('be.visible')
    .type(problem_username)
    cy.get('@password')
    .should('be.visible')
    .type(standard_password)
    cy.get('@login')
    .should('exist')
    .click()
    cy.url()
    .should('eq', 'https://www.saucedemo.com/inventory.html')
    inventoryPage.elements.productsHeading()
    .should('exist')
})

it("Verify standard user account gets redirected to inventory", () =>{
    cy.get('@userName')
    .should('be.visible')
    .type(authorized_username)
    cy.get('@password')
    .should('be.visible')
    .type(standard_password)
    cy.get('@login')
    .should('exist')
    .click()
    cy.url()
    .should('eq', 'https://www.saucedemo.com/inventory.html')
    inventoryPage.elements.productsHeading()
    .should('exist')
})
})
