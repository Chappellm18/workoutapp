import router from "../router";
import { Login } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification"

const session = {
    user: null,
    messages: [],                                   // {{text: string, type: string}}
    toRoute: '/profile',
    loginTrigger(handle, password) {
        try {
            const response = Login(handle, password);

            this.user = response.user;

            router.push(this.toRoute);
        } catch (error) {
            this.messages.push({ text: error.msg, type: 'warning' });
            NotificationProgrammatic.open({
                message: error.msg,
                variant: 'danger',
                closeable: true,
                type: 'danger',
                duration: 5000,
            })
        }

    }
};

export default session;

//export function