import { typeRegistration } from "../types/types.js";

export const reducerRegister = (state = {}, action) => {
    switch (action.type) {
        case typeRegistration.login:
            return {
                user: action.payload.user,
                pass: action.payload.pass
            }
        case typeRegistration.register:
            return {
                email: action.payload.email,
                pass: action.payload.pass,
                name: action.payload.name,
            }
        case typeRegistration.logout:
            return {
            }

        default:
            return state
    }
}
