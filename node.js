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

///

// const events = require("events");
// const fs = require("fs");

// // EventEmitter object is used to assign listener functions triggered on specific events
// let myEmitter = new events.EventEmitter();

// let newWelcomeMessage = (data) => {
//   console.log(`Welcome to Nodejs, what's your name? ${data}.`);
// };

// myEmitter.on("welcome", newWelcomeMessage);
// myEmitter.emit("welcome", "Codey");

// // Buffer objects are used to handle binary data
// const buffer = Buffer.from("Hello World");
// console.log(buffer);
// console.log(buffer.toString());

// let readDataCallback = (err, data) => {
//   if (err) {
//     console.log(`Something went wrong: ${err}`);
//   } else {
//     console.log(`Provided file contained: ${data}`);
//   }
// };

// // file.txt file is loaded using the readFile method of the fs module
// fs.readFile("./file.txt", "utf-8", readDataCallback);

// setImmediate function runs immediately after the current poll phase is completed
setImmediate(() => {
  console.log("Welcome to Node.js");
});
