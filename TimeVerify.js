module.exports = function verifyTime(timeOfTimes) {

    let timeIn, lunchStart, lunchEnd, dinnerStart, dinnerEnd, timeOut
    let daysWorkeds = []

    const verifyWorkedPeriod = (timeIn, timeOut) => {
        function hoursToMinuts(hour) {
            //destructurar la hora y convertirlo de string a int
            const [hours, minuts, period] = hour.split(/:| /)
            const theHours = parseInt(hours)
            const theMinuts = parseInt(minuts)

            //calcular horas en base a minutos
            let totalMinuts = theHours * 60 + theMinuts

            //validaciones para transformar horas a formato de 24 horas
            if (period === 'pm' && theHours !== 12) {
                totalMinuts += 720
            } else if (period === 'am' && theHours === 12) {
                totalMinuts = minuts
            }

            return totalMinuts
        }

        const minutsTimeIn = hoursToMinuts(timeIn)
        const minutsTimeOut = hoursToMinuts(timeOut)

        const workedPeriod = minutsTimeOut - minutsTimeIn
        if (workedPeriod >= 300) {
            //trabajo mas de 5 horas detener procesosretornar false
            return false
        }else{
            return 'rela'
        }
    }

    const validateTime = (times) => {
        timeIn = times[0]
        lunchStart = times[1]
        lunchEnd = times[2]
        dinnerStart = times[3]
        dinnerEnd = times[4]
        timeOut = times[5]

        if (timeIn) {
            if (lunchStart) {
                const workedPeriod = verifyWorkedPeriod(timeIn, lunchStart)

                if (!workedPeriod) {
                    return false
                }
            } else if (!lunchStart || !lunchEnd) {
                if (dinnerStart) {
                    const workedPeriod = verifyWorkedPeriod(timeIn, dinnerStart)

                    if (!workedPeriod) {
                        return false
                    }
                }else if (!dinnerStart || !dinnerEnd){
                    const workedPeriod = verifyWorkedPeriod(timeIn, timeOut)

                    if (!workedPeriod) {
                        return false
                    }
                }
            }
            if (lunchEnd && dinnerStart) {
                const workedPeriod = verifyWorkedPeriod(lunchEnd, dinnerStart)

                if (!workedPeriod) {
                    return false
                }
            } else if (lunchEnd && !dinnerStart) {
                const workedPeriod = verifyWorkedPeriod(lunchEnd, timeOut)

                if (!workedPeriod) {
                    return false
                }
            }

        }
        return true
    }

    timeOfTimes.forEach(day => {
        const dayworked = validateTime(day)
        if (!dayworked) {
            daysWorkeds.push(...[dayworked])
        } else {
            daysWorkeds.push(...[dayworked])
        }
    });

    return daysWorkeds

}

//funcion de prueba inicial no usar 
function verifyTime1() {

    console.log(timeOfTimes)

    //Convertir las horas a minutos tomando en cuenta el periodo am / pm
    function hoursToMinuts(hour) {
        return
        //destructurar la hora y convertirlo de string a int
        const [hours, minuts, period] = hour.split(/:| /)
        const theHours = parseInt(hours)
        const theMinuts = parseInt(minuts)

        //calcular horas en base a minutos
        let totalMinuts = theHours * 60 + theMinuts

        //validaciones para transformar horas a formato de 24 horas
        if (period === 'pm' && theHours !== 12) {
            totalMinuts += 720
        } else if (period === 'am' && theHours === 12) {
            totalMinuts = minuts
        }

        return totalMinuts
    }

    //obtener valores
    const minutsTimeIn = hoursToMinuts(timeIn)
    const minutsTimeOut = hoursToMinuts(timeOut)

    //obtener horas totales trabajadas
    const workedMinuts = minutsTimeOut - minutsTimeIn

    //validamos si trabajo 5 horas 300mts === 5hrs
    if (workedMinuts >= 300) {
        console.log('Co;o marico has trabajado mas de 5 horas tu le hechas bola')
    }

    console.log(workedMinuts)
}
