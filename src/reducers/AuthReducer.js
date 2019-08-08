const initialState = {
    email: '321',
    pass: '123',
    emailValid: false,
    passValid: false,
    status: 0
};

const AuthReducer = (state = initialState, action) => {

    if(action.type == "changeStatus") {
        return {...state, status: action.payload.status};
    }

    if(action.type == "setEmail") {
        let isValid = false;
        let re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(re.test(action.payload.email.toLowerCase())) {
            isValid = true;
        }

        return {...state, email: action.payload.email, emailValid:isValid};
    }

    if(action.type == "setPassword") {
        let isValid = false;

        if(action.payload.pass.length > 4) {
            isValid = true;
        }
        return {...state, pass: action.payload.pass, passValid: isValid};
    }

    return state;
}

export default AuthReducer;