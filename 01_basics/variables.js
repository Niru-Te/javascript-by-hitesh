const accountId = 1234;
let accountEmail ="Neeraj@hook.com";
var accountPassword = "28427";
accountCity = "gorakhpur";
let accountState;
//  accountId = 1245    //not allowed

accountEmail= "dheeraj@google.com";
accountPassword="9438";
accountCity = "locknow";

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
