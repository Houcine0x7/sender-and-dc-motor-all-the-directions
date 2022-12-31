radio.setGroup(1)

input.onGesture(Gesture.LogoUp,function(){
    radio.sendString("M f")
})

input.onGesture(Gesture.LogoDown,function(){
    radio.sendString("M b")
})
,
input.onGesture(Gesture.TiltLeft,function(){
    radio.sendString('Go Left')
})

input.onGesture(Gesture.TiltRight,function(){
    radio.sendString("Go Right")
})

input.onButtonPressed(Button.A,function(){
    radio.sendString("A")
})

input.onButtonPressed(Button.B,function(){
    radio.sendString("B")
})

input.onGesture(Gesture.ScreenUp,function(){
    radio.sendString("Stop")
})