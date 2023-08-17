"use strict";
function detectType(val) {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}
// typeof is called type guard
function provideId(id) {
  if (!id) {
    console.log("please provide id");
    return;
  }
  id.toLowerCase();
}
function isAdminRole(account) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}
function isFish(pet) {
  //pet is fish is written to tell this function return a fish if condition becomes true
  return pet.swim !== undefined;
}
//this above topic is type predicates
// Discriminated Union:
//giving a particular value peoperty like type:, kind: etc to all interface to check
//which interface exaclty it is"
// Exhaustiveness Checking with never: checking all cases then at end writing default case too
