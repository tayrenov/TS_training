"use strict";
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
/***********************************/
function getFullName(name, surname) {
    return `${name} ${surname}`;
}
console.log(getFullName('NAME', 'SURNAME'));
/*************** Obj ***************/
function getFullNameObj(userEntify) {
    return `${userEntify.firstname} ${userEntify.surname}`;
}
const user = {
    firstname: 'obj-NAME',
    surname: 'obj-SURNAME',
    city: 'CITY',
    age: 26,
    skills: {
        dev: true
    }
};
console.log(getFullNameObj(user));
/*************** Arr ***************/
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills
    .filter((s) => s !== 'DevOps')
    .map(s => { return 1; })
    .reduce((a, b) => a + b);
console.log(result);
/*************** Enum **************/
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const resEnum = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
};
if (resEnum.statusCode === StatusCode.SUCCESS) {
}
