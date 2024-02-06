export const emailValidate = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    
);


export const passwordValidate = new RegExp(    
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
);