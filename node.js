// const os = require("os");

// // NOW WE know how to use os
// const local = {
//     "home dir": os.homedir(),
//     "Operating System": os.type(),
//     "Last Reboot": os.uptime(),
// }

// console.log(local)


// function getUser (id, callback) {
//     return setTimeout(() => {
//         if (id === 5) {
//             callback(null, { nickname: 'Teddy' })
//         } else {
//             callback(new Error('User not found'))
//         }
//     }, 1000)
// }

// function callback (error, user) {
//     if (error) {
//         console.error(error.message)
//         process.exit(1)
//     }
    
//     console.log(`User found! Their nickname is: ${user.nickname}`)
// }

// getUser(1, callback) // -> `User not found`
// getUser(5, callback) // -> `User found! Their nickname is: Teddy`


// const util = require('util');
// const getUserPromise = util.promisify(getUser);

// getUserPromise(id)
// .then((user) => {
//     console.log(`User found! Their nickname is: ${user.nickname}`);
// })
// .catch((error) => {
//     console.log('User not found', error);
// });

// getUser(1) // -> `User not found`
// getUser(5) // -> `User found! Their nickname is: Teddy`



// const getTrailDistancePromise = util.promisify(getTrailDistance);

// getTrailDistancePromise('North Country')
//   .then((foundTrail) => {      
//     const nickname = foundTrail.nickname;
//     const mi = foundTrail.miles; 
//     console.log(`The ${nickname} is ${mi} miles long!`);
//   })
//   .catch((error) => {
//     console.log('Trail not found!', error);
//   })