const session = {
    user: null,
    messages: [],
    toRoute: '/profile',
    Login(emailInput, passwordInput) {
        this.user = {
            FirstName: 'Mitch',
            LastName: 'Chappell',
            email: emailInput,
            password: passwordInput,
            id: 123,
        }
    }
};

export default session;