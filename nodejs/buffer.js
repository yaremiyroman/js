const someParam = 'Hello, World!';

if (typeof someParam !== 'string') {
    throw new Error('Parameter must be a string');
}

try {
    const encodedParam = Buffer.from(someParam).toString('base64');
    const encodedParamToHex = Buffer.from(someParam).toString('hex');
    // some operation takes time 20s
} catch (error) {
    console.error('Error encoding parameter:', error);
}

console.log(`hex    > ${encodedParamToHex}`);


const decodedParam = Buffer.from(encodedParam, 'base64').toString('utf-8');
const decodedParamToHex = Buffer.from(encodedParamToHex, 'hex').toString('utf-8');

console.log(`base64 >> ${decodedParam}`);
console.log(`hex    >> ${decodedParamToHex}`);
