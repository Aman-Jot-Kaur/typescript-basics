const score: Array<number> = [];
function identityone(val: boolean | number): boolean | number {
  return val;
} // what if we want to do this for all data types, we will have to write so many or ?

function identitytwo(val: any): any {
  return val;
} // here we donot have the information about type of val, it is gone

function identitythree<Type>(val: Type): Type {
  return val;
} // here number will give number in return, if string is passed, it will give string in return

interface person {
  name: string;
  age: number;
}

identitythree<person>({ name: "s", age: 22 });

const getPeople = <Type>(people: Type[]): Type => {
  // comma with type is used to tell this is not a mornal type or tag,but a generic's type
  return people[1];
}; //generic arrow method
