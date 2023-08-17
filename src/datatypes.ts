//number

let userid: number = 123;

//boolean

let islogin = false;

//functions

function add2(num: number): number {
  // cant do num.toUpperCase()
  return num + 2;
}

add2(4);

var istrue = (num: number) => {
  if (num === 4) {
  }
};

function checkerr(errormsg: string): never {
  throw errormsg;
}

//objects in type script
function objfunc({}): {} {
  return {};
}

objfunc({});

type user = {
  name: string;
  readonly mail: string;
  creditnumber?: number; //optional properties
};

type empoloyee = user & {
  empid: number;
};

//arrays

const arr: string[] = [];
arr.push("this");

const users: user[] = [];
const coordeinates: number[][] = [
  [12, 22],
  [123, 29, 33],
];

//unions

let score: number | string = "3";
score = 44;

// for an array to have either string or number
const mixedarray: (string | number)[] = ["22", 22];

//literal assignment

let seatallotment: "aisle" | "window";

//seatallotment="crew" error  shows

//tuples:
// to want some data at particular positions, like data from an api
let array: [string, number, boolean];
array = ["t", 2, true];
//array=[2,"t",true] is wrong because in tuples order of array matters

//enums:
//default values always increase by one(for numbers wherever found in continuous)  in this if not given by us

const enum seats { // write const to avoid iffy style in javascript here
  aisle = 9,
  window,
}
const myseat = seats.aisle;

//interfaces:
interface student {
  readonly id: number;
  startTrial: () => string; // 1st method to write functions in interfaces
}

const stuydent1: student = {
  id: 22,
  startTrial: () => {
    return "";
  },
};

interface seniorStudent {
  readonly id: number;
  startTrial(): string; // 2nd method to write functions in interfaces
  register(val1: boolean): boolean;
}

// re-opening the interface:
//we can make changes in exitsting interFACES

interface seniorStudent {
  newproperty: string; // re opened senior student and added a new property
}

interface highschool extends seniorStudent {
  role: "high schooler" | "new";
}

const jake: highschool = {
  id: 22,
  role: "new",
  register() {
    return false;
  },
  newproperty: "n",
  startTrial() {
    return "";
  },
};
export {};
