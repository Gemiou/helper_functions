
//  Password rules with regex

    required: value => !!value || "Required."
    min: v => v.length >= 8 || "Min 8 characters",
    lowercaseRequired: v => /[a-z]+/.test(v) || "One lowercase letter at least required.",
    upperCaseRequired: v =>/[A-Z]+/.test(v) || "One uppercase letter at least required.",
    numberRequired: v =>/[0-9]+/.test(v) || "One number at least required.",
    specialCharacter: v => /[*@!#%&()^~{}]+/.test(v) || "One special symbol at least required."

//  ------------ //



  
