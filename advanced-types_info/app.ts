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