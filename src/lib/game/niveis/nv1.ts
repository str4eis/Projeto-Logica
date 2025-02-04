import k from "../kaboom";
  

  
  k.scene("main", (levelIdx) => {
    
    const SPEED = 320;
    
    const levels = [
		[
			"===============|==============",
			"=                            =",
			"=                            =",
			"=                            =",
            "=                            =",
            "=                            =",
			"=                            =",
            "=                            =",
            "=                            =",
            "=                            =",
            "=                            =",
			"=                            =",
			"=                            =",
            "=                            =",
			"==============================",
		],
	]

    const level = k.addLevel(levels[levelIdx], {
          tileHeight: 64,
          tileWidth: 64,
          pos: k.vec2(0,0),
          tiles: {
              " ": () => [
              k.color(255, 0,0),
              k.rect(64,64),
              ],
  
              "=": () => [
                k.rect(64,64),
                k.color(0,255,0),
                k.area(),
                k.body({isStatic: true}),
              ],
              "|": () => [
                k.rect(64,64),
                k.color(255,255,0),
                k.body({isStatic: true}),
                k.area(),
                "porta",
              ],
              
          }
      })
  
    

    player.onCollide("porta", () => {
    k.go('main', 1)
  });

  })
  
 
  k.go('main', 0)