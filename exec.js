const verifyTime = require("./TimeVerify.js");
const cloking_example = require("./clockin-sample-2.json")

const timeOfTimes = [
]

const jsonData = Object.keys(cloking_example)

jsonData.forEach(day => {
    timeOfTimes.push(cloking_example[day])
})

const daysWorkeds = verifyTime(timeOfTimes)
console.log(daysWorkeds)