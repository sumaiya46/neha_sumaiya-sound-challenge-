// while True: 
//   if input.sound_level()>10:
//      light.set_all (color.rgb(0, 0, 255))
//   else:
//       light.clear()
while (true) {
    console.log("Sound Level:" + input.lightLevel())
    if (input.lightLevel() >= 5) {
        music.pewPew.playUntilDone()
    } else {
        music.magicWand.playUntilDone()
    }
    
}
