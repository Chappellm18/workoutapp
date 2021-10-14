import router from "../router";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/profile',
    Login(handle, passwordInput) {
        const user = Login(handle, passwordInput);
        this.user = user;
        router.push(this.toRoute);
    }      
};

export default session;