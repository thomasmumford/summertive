input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) <= 80 && input.rotation(Rotation.Pitch) >= 30 && Math.abs(input.rotation(Rotation.Roll)) < 10) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
