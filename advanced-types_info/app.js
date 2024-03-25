"use strict";
/********** UNION **********/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function logId(id) {
    if (typeof id === 'string') {
        console.log('String_' + id);
    }
    else if (typeof id === 'number') {
        console.log('Number_' + id);
    }
    else {
        console.log('Boolean_' + id);
    }
}
logId('str');
logId(1);
logId(true);
console.log('____________');
function logError(err) {
    if (Array.isArray(err)) {
        console.log('String_' + typeof err);
    }
    else {
        console.log('ArrString_' + typeof err);
    }
}
logError('err');
logError(['err', 'or']);
console.log('____________');
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
logObject({ a: 1 });
logObject({ b: 1 });
logObject({ a: 2, b: 1 });
console.log('____________');
function logMultipleIds(a, b) {
    if (a == b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
logMultipleIds('a', 'b');
logMultipleIds(1, '1');
logMultipleIds('1', '1');
logMultipleIds('2', '1');
console.log('____________');
/***************************/
/********** LITERAL **********/
function fetchWithAuth(url, method) {
    console.log(url);
    console.log(method);
    return 1;
}
fetchWithAuth('str', 'post');
fetchWithAuth('str', 'get');
console.log('____________');
let user = {
    name: 'name',
    age: 12,
    skills: ['s1', 's2'],
    id: 1
};
console.log(user);
console.log('____________');
let user1 = {
    name: 'str',
    age: 1,
    skills: ['1', '2'],
    id: 1,
    createdAt: new Date()
};
console.log(user1);
console.log('____________');
const user2 = {
    login: 'mail@com',
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
console.log(multiply(5));
console.log(multiply(5, 3));
console.log('____________');
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    return t;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
    return t;
}
console.log(testPass({ login: 'login',
    password: {
        type: 'secondary'
    }
}));
console.log(testPass({ login: 'login' }));
console.log(test('str'));
console.log(test());
console.log('____________');
/***************************/
/********** UNKNOWN **********/
let input;
input = 3;
function run(i) {
    if (typeof i == 'number') {
        i++;
    }
    return i;
}
console.log(run(3));
console.log(run('str'));
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            const e = error;
            console.log(e.message);
        }
    });
}
getData();
getDataForce();
/***************************/
/********** NEVER **********/
function generateError(message) {
    console.log(message);
}
generateError('message');
/***************************/ 
