// before es6 method
const osModule = require('os')
// aftre es6 method
// import * as os from os

// arch returms the architechture of CPU
// console.log(osModule.arch())


// it will show all the details of operating system
// console.log(osModule.constants)

// will give details of cpu
// console.log(osModule.cpus())

// console.log(osModule.endianness())

// console.log(osModule.EOL)

// returns free memory of sytem 
// console.log(osModule.freemem()/1024/1024/1024)

// to find total memory
// devdiing 1024 to convert from bit to kb to mb to gb
// console.log(osModule.totalmem()/1024/1024/1024)

// lets find how much memory we are using
let totalmem=osModule.totalmem()/1024/1024/1024

let freemem=osModule.freemem()/1024/1024/1024

let useMem=totalmem-freemem

// console.log(`total memory using is ${useMem}`)
// console.log(`total memory is ${totalmem} and free memory is ${freemem} and memory in usage is ${useMem}`)

// to find host name of system
// console.log(osModule.hostname())

// console.log(osModule.platform())
// console.log(osModule.release())
// console.log(osModule.tmpdir())
// console.log(osModule.type())
// console.log(osModule.uptime())

// will give user info
console.log(osModule.userInfo())
// console.log(osModule)



////node js gives us a wrapper function with four parameter

function wrapper(require,exports,__dirname,__filename){

}

