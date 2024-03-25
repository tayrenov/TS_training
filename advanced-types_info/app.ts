/********** UNION **********/

function logId(id: string | number | boolean) {

    if (typeof id === 'string') {
        console.log('String_' + id)
    } else if (typeof id === 'number') {
        console.log('Number_' + id)
    } else {
        console.log('Boolean_' +id)
    }
}

logId('str');
logId(1);
logId(true);

console.log('____________')

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log('String_'+ typeof err);
    } else {
        console.log('ArrString_'+typeof err);
    }
}

logError('err')
logError(['err','or'])

console.log('____________')

function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

logObject({a:1})
logObject({b:1})
logObject({a:2,b:1})

console.log('____________')

function logMultipleIds(a: string | number, b: string | boolean) {
    if (a == b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

logMultipleIds('a', 'b')
logMultipleIds(1, '1')
logMultipleIds('1', '1')
logMultipleIds('2', '1')

console.log('____________')

/***************************/

/********** LITERAL **********/

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    console.log(url);
    console.log(method);
    return 1;
}

fetchWithAuth('str', 'post')
fetchWithAuth('str', 'get')

console.log('____________')

/***************************/

/********** TYPE **********/

type User = {
    name: string,
    age: number,
    skills: string[],
    id: number
}

let user: User = {
    name: 'name',
    age: 12,
    skills: ['s1', 's2'],
    id:1
}

console.log(user)

console.log('____________')

/***************************/

/********** INTERFACE **********/

interface User1 {
    name: string,
    age: number,
    skills: string[],

}

interface UserID {
    id: number
}

interface CreateUser extends User1, UserID {
    createdAt: Date;
}

let user1: CreateUser = {
    name: 'str',
    age: 1,
    skills: ['1','2'],
    id: 1,
    createdAt: new Date()
}

console.log(user1)

console.log('____________')

/***************************/

/********** OPTIONAL **********/

interface User2 {
    login: string;
    password?: string;
}

const user2: User2 = {
    login:'mail@com',
    password: '1'
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first
    }

    return first * second
}

console.log(multiply(5))
console.log(multiply(5,3))

console.log('____________')

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
    return t;
}

function test(param?: string) {
    const t = param ?? multiply(5);
    return t;
}

console.log(testPass(
    {login:'login', 
        password:{
        type:'secondary'
        }
    }))

console.log(testPass({login:'login'}))

console.log(test('str'))
console.log(test())

console.log('____________')
/***************************/

/********** UNKNOWN **********/

let input: unknown;

input = 3;

function run(i: unknown) {
    if (typeof i == 'number') {
        i++
    } 

    return i
}

console.log(run(3))
console.log(run('str'))

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error;
        console.log(e.message)
    }
}

getData()

getDataForce()

/***************************/
