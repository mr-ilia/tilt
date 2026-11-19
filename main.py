while True:
    roll = input.rotation(Rotation.ROLL)
    if abs(roll) >= 30:
        basic.show_icon(IconNames.NO, 0)
    else:
        basic.clear_screen()
    basic.pause(100)
