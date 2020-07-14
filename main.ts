makerbit.connectUltrasonicDistanceSensor(DigitalPin.P2, DigitalPin.P1)
music.playMelody("D C - D C - - - ", 347)
let cntr = 0
cntr = 50
let left = true
basic.forever(function () {
    if (makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        160,
        robotbit.Motors.M2B,
        160
        )
        basic.pause(200)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        160,
        robotbit.Motors.M2B,
        -160
        )
        basic.pause(200)
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -160,
        robotbit.Motors.M2B,
        -160
        )
    }
    if (left) {
        cntr += 10
        if (cntr >= 110) {
            left = false
        }
    } else {
        cntr += -10
        if (cntr <= 50) {
            left = true
        }
    }
    robotbit.GeekServo(robotbit.Servos.S1, cntr)
    basic.pause(100)
})
