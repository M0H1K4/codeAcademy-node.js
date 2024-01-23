const os = require("os");

// NOW WE know how to use os
const local = {
    "home dir": os.homedir(),
    "Operating System": os.type(),
    "Last Reboot": os.uptime(),
}

console.log(local)