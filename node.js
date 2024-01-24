// const os = require("os");

// // NOW WE know how to use os
// const local = {
//     "home dir": os.homedir(),
//     "Operating System": os.type(),
//     "Last Reboot": os.uptime(),
// }

// console.log(local)


function getUser (id, callback) {
    return setTimeout(() => {
      if (id === 5) {
        callback(null, { nickname: 'Teddy' })
      } else {
        callback(new Error('User not found'))
      }
    }, 1000)
  }
  
  function callback (error, user) {
    if (error) {
      console.error(error.message)
      process.exit(1)
    }
  
    console.log(`User found! Their nickname is: ${user.nickname}`)
  }
  
  getUser(1, callback) // -> `User not found`
  getUser(5, callback) // -> `User found! Their nickname is: Teddy`