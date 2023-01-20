// requireing dns module
const dnsModule = require('dns')

// console.log(dnsModule)


// to find ip adress of any website

dnsModule.lookup("www.tekisky.com", (error, adress, family) => {
    // it will show the ip adress registered
    console.log(adress)
    // it will show either ipv4 or ipv6
    console.log(family)
    // it will show is their any error occuring
    console.log(error)
})