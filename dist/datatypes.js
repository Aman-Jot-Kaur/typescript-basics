"use strict";
//number
Object.defineProperty(exports, "__esModule", { value: true });
let userid = 123;
//boolean
let islogin = false;
//functions
function add2(num) {
  // cant do num.toUpperCase()
  return num + 2;
}
add2(4);
var istrue = (num) => {
  if (num === 4) {
  }
};
function checkerr(errormsg) {
  throw errormsg;
}
//objects in type script
function objfunc({}) {
  return {};
}
objfunc({});
//arrays
const arr = [];
arr.push("this");
const users = [];
const coordeinates = [
  [12, 22],
  [123, 29, 33],
];
//unions
let score = "3";
score = 44;
// for an array to have either string or number
const mixedarray = ["22", 22];
//literal assignment
let seatallotment;
//seatallotment="crew" error  shows
//tuples:
// to want some data at particular positions, like data from an api
let array;
array = ["t", 2, true];
const myseat = 9; /* seats.aisle */
const stuydent1 = {
  id: 22,
  startTrial: () => {
    return "";
  },
};
const jake = {
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
