input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (randint(1, 6)))
    basic.pause(2000)
    basic.clearScreen()
})
