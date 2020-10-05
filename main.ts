robotbit.MotorStopAll()
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P12, DigitalPin.P8)
let cntr = 50
let SPEED = 500
let left = true
let yellow_bin = game.createSprite(0, 4)
let blue_bin = game.createSprite(2, 4)
let grey_bin = game.createSprite(4, 4)
basic.forever(function () {
    if (makerbit.isUltrasonicDistanceLessThan(20, DistanceUnit.CM)) {
        if (cntr >= 20 && cntr <= 40) {
            yellow_bin.change(LedSpriteProperty.Y, -1)
        } else if (cntr >= 90 && cntr <= 130) {
            blue_bin.change(LedSpriteProperty.Y, -1)
        } else if (cntr >= 160 && cntr <= 190) {
            grey_bin.change(LedSpriteProperty.Y, -1)
        }
    }
    if (yellow_bin.get(LedSpriteProperty.Y) == 0) {
        yellow_bin.set(LedSpriteProperty.Y, 4)
    } else if (blue_bin.get(LedSpriteProperty.Y) == 0) {
        blue_bin.set(LedSpriteProperty.Y, 4)
    } else if (grey_bin.get(LedSpriteProperty.Y) == 0) {
        grey_bin.set(LedSpriteProperty.Y, 4)
    }
})
basic.forever(function () {
    if (left) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        50,
        robotbit.Motors.M1B,
        -50
        )
        cntr += 5
        if (cntr >= 170) {
            left = false
        }
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1B,
        50,
        robotbit.Motors.M1A,
        -50
        )
        cntr += -5
        if (cntr <= 25) {
            left = true
        }
    }
    robotbit.GeekServo(robotbit.Servos.S1, cntr)
    basic.pause(60)
})
