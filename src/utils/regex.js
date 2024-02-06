export const emailValidate = new RegExp(
    "/[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/g"
    
);


export const passwordValidate = new RegExp(    
    "/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,12}/g"
);