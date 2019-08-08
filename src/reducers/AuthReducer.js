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
        return {...state, email: action.payload.email};
    }

    if(action.type == "setPassword") {
        return {...state, pass: action.payload.pass};
    }

    return state;
}

export default AuthReducer;