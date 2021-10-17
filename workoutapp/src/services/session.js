import router from "../router/index.js";
import { Login } from "./users";



const Session = {
    user: null,
    messages: [],
    token: null,
    toRoute: '/profile',
    loginTrigger(handle, passwordInput) {
    
        this.user = Login(handle, passwordInput);
        router.push(Session.toRoute)
        
    }
}

export default Session;