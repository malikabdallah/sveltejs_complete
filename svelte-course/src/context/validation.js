export const validateRequiredField = (value, label = "Field")=>{
    let error;
    if(value){
        error = `The ${label} is Required.`;
    }
    return error;
}

export const validateEmail = (value, label = "Email")=>{
    let error; 
    if(value){
        error = `The ${label} is Invalid.`;
    }
    return error;
}