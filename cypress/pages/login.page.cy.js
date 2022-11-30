class loginPage{
    elements = {
        userNameInput: () => cy.findByPlaceholderText("Username"),
        passwordInput: () => cy.findByPlaceholderText("Password"),
        loginButton: () => cy.get('#login-button'),
        unauthorizedMessage: () => cy.findByText("Epic sadface: Sorry, this user has been locked out.")
    }

}
export default new loginPage()