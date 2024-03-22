let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;
console.log(res);

/***********************************/

function getFullName(name:string, surname:string) {
    return `${name} ${surname}`;
}

console.log(getFullName('NAME', 'SURNAME'))

/*************** Obj ***************/

function getFullNameObj(userEntify: { firstname: string, surname: string}): string {
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
}

console.log(getFullNameObj(user))

/*************** Arr ***************/

const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase())
}

const result = skills
    .filter((s: string) => s !== 'DevOps')
    .map(s => {return 1})
    .reduce ((a, b) => a + b)

console.log(result)

/*************** Enum **************/

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS ='p',
    FAILED = 'f'
}

const resEnum = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
}

if (resEnum.statusCode === StatusCode.SUCCESS) {

}
