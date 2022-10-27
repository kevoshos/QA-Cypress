class loginPage{
    elements = {
        userNameInput: () => cy.findByPlaceholderText("Username"),
        passwordInput: () => cy.findByPlaceholderText("Password"),
        loginButton: () => cy.get('#login-button')

    }

}
export default new loginPage()