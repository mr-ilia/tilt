let roll: number;
while (true) {
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(roll) >= 30) {
        basic.showIcon(IconNames.No, 0)
    } else {
        basic.clearScreen()
    }
    
    basic.pause(100)
}
