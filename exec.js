const verifyTime = require("./TimeVerify.js");

const timeOfTimes = [
    [
        '8:00 am',
        '11:00 am',
        '12:00 pm',
        '3:00 pm',
        '4:00 pm',
        '6:00 pm',
    ],
    [
        '8:00 am',
        '2:00 pm',
        '2:30 pm',
        null,
        null,
        '6:00 pm',
    ]
]

verifyTime(timeOfTimes)