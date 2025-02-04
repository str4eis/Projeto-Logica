import k, {SPEED, TILE_SIZE} from "../kaplay";  
import { spawnPlayer } from "../objetos/player/player";

import './levelWin'

  k.scene( 'level3', () => {
    
    const LEVEL_AREA: string[] = [
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
	]

    const LEVEL = k.addLevel(LEVEL_AREA, {
          tileHeight: TILE_SIZE,
          tileWidth: TILE_SIZE,
          tiles: {
              " ": () => [
              k.color(0, 255,0),
              k.rect(64,64),
              ],
  
              "=": () => [
                k.rect(64,64),
                k.color(0,0,255),
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
  
      const player = spawnPlayer(3, 5)

      player.onCollide('porta', () => {
        k.go("levelWin")
      })
      
})