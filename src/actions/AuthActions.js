//import { } from '../uberApi'
export const checkLogin = () => {
    return {
        type: 'changeStatus',
        payload: {
            status: 2
        }
    }
}

export const setEmail = (email) => {
    return {
        type: 'setEmail',
        payload: {
            email
        }
    }
}

export const setPassword = (pass) => {
    return {
        type: 'setPassword',
        payload: {
            pass
        }
    }
}