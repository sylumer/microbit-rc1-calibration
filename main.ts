function changeBias (bias_adjustment: number) {
    new_bias = bias + bias_adjustment
    if (new_bias <= 10 && new_bias >= -10) {
        bias = new_bias
    }
}
input.onButtonPressed(Button.A, function () {
    changeBias(1)
})
input.onButtonPressed(Button.B, function () {
    changeBias(-1)
})
let new_bias = 0
let bias = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
bias = 0
basic.forever(function () {
    basic.showNumber(bias)
    if (Kitronik_Move_Motor.measure() < 5) {
        Kitronik_Move_Motor.beepHorn()
        basic.pause(1000)
        Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, bias)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 25)
        basic.pause(2000)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.beepHorn()
    }
})
