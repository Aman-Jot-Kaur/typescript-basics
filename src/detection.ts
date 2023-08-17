function detectType(val : number | string ){
    if(typeof val==='string')
    return val.toLowerCase();
    
    return val+3
}
// typeof is called type guard
function provideId(id:string | null){
    if(!id){
    console.log("please provide id")
    return }
    id.toLowerCase();
}
// for array typeof returns object so check if typeof array===object



//null is object too

//"" gives string


interface user{
    name:string,
    email:string
}

// example of in operator
interface admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminRole(account : user | admin){
   if("isAdmin" in account){
    return account.isAdmin
   } 
  return false
}

//CAN ALSO USE instanceOf for DATE Class and other classes objects
// if("isAdmin" instanceOf Date){
  //  return account.isAdmin
  // } 


  type Fish={swim: ()=> void}

  function isFish(pet: Fish | null): pet is Fish{ 
    //pet is fish is written to tell this function return a fish if condition becomes true
 return (pet as Fish).swim !== undefined
  }

//this above topic is type predicates
 
  // Discriminated Union:

  //giving a particular value peoperty like type:, kind: etc to all interface to check
  //which interface exaclty it is"

  // Exhaustiveness Checking with never: checking all cases then at end writing default case too

