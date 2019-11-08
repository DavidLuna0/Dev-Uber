export const verifyLogin = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let status = 1;
            resolve(status);
        }, 2000)
    })
}

export const makeLogin = function(email, password) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            let status = 1;
            resolve(status);
        }, 2000)
    })
}

export const makeSignUp = function(name, email, password) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            let status = 1;
            resolve(status);
        }, 2000)
    })
}

export const makeForgot = function(email) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            resolve(status);
        }, 2000)
    })
}

export const makeLocationSearch = function(location) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            let array = [
                {id: 1,label: 'Rua tal tal, 145', lat: -10, lng: 20},
                {id: 2,label: 'Rua bili, 14', lat: -21, lng: 20},
                {id: 3,label: 'Rua tal asdad, 15', lat: -50, lng: 90},
                {id: 4,label: 'Rua tal aassssssssssdad, 15', lat: -50, lng: 90},
            ];
            resolve(array);
        }, 2000)
    })
}

