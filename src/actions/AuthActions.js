import { verifyLogin, makeLogin, makeSignUp, makeForgot } from "../uberApi";

//import { } from '../uberApi'
export const checkLogin = () => {

    return (dispatch) => {
        verifyLogin().then((status) => {
            dispatch({
                type: 'changeStatus',
                payload: {
                    status
                }
            });
        }).catch(() => {
            dispatch({
                type: 'changeStatus',
                payload: {
                    status: 2
                }
            });
        })
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

export const setName = (name) => {
    return {
        type: 'setName',
        payload: {
            name
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

export const doLogin = (email, password) => {
    return (dispatch) => {
        makeLogin(email, password).then((status) => {
            if(status == 2) {
                alert("Email ou senha errados")
            }
            dispatch({
                type: 'changeStatus',
                payload: {
                    status
                }
            })
        }).catch(() => {
            alert("Tente novamente mais tarde")
        });
    }
}

export const doSignUp = (name, email, password) => {
    return (dispatch) => {
        makeSignUp(name, email, password).then((status) => {
            if(status == 2) {
                alert("Email já está cadastrado")
            }
            dispatch({
                type: 'changeStatus',
                payload: {
                    status
                }
            })
        }).catch(() => {
            alert("Tente novamente mais tarde")
        });
    }
}

export const doForgot = (email) => {
    return (dispatch) => {
        makeForgot(email).then(() => {
            alert("Enviamos um email de redefinição de senha!")
        }).catch(() => {
            alert("Tente novamente mais tarde")
        });
    }
}