robotbit.MotorStopAll()
music.setVolume(10)
music.playTone(587, music.beat(BeatFraction.Half))
music.rest(music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Quarter))
let cntr = 0
cntr = 50
let SPEED = 500
let left = true
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P2, DigitalPin.P1)
basic.showNumber(3)
basic.pause(500)
basic.showNumber(2)
basic.pause(200)
basic.showNumber(1)
basic.pause(100)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        SPEED,
        robotbit.Motors.M2B,
        SPEED
        )
        basic.pause(200)
        if (left) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            SPEED,
            robotbit.Motors.M2B,
            0 - SPEED
            )
        } else {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            0 - SPEED,
            robotbit.Motors.M2B,
            SPEED
            )
        }
        basic.pause(200)
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0 - SPEED,
        robotbit.Motors.M2B,
        0 - SPEED
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
