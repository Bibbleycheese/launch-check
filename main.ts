basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        if (input.acceleration(Dimension.Y) > 500) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else {
            if (input.acceleration(Dimension.Z) > 500) {
                basic.showLeds(`
                    # # # # #
                    . . . # .
                    . . # . .
                    . # . . .
                    # # # # #
                    `)
            } else {
                basic.showLeds(`
                    . # # # .
                    # . . . #
                    # . # . #
                    # . . . #
                    . # # # .
                    `)
            }
        }
    }
})
