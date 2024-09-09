export const checkValidation=(email,password)=>{
   let isEmailValidate=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   let isPasswordValidate=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  
   if(!isEmailValidate) return "Please enter valid Email address!";
   if(!isPasswordValidate) return "Please enter valid Password!";
 
return null;
}

export const checkNameValidation=(fullname)=>{
   let isNameValidate=/^[A-Z][a-z]*((\s[A-Z][a-z]*)+)?$/.test(fullname);
   if(!isNameValidate) return "Please enter your FullName!";

   return null;
}