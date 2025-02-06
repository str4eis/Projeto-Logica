import k, {createLevel, SPEED, TILE_SIZE} from "../kaplay";  
import { spawnPlayer } from "../objetos/player/player";

import './level4'

  k.scene( 'level3', () => {
    
    k.addLevel([
      "qttttttttttttt||tttttttttttttp",
			"                              ",
			"                              ",
			"                              ",
      "                              ",
      "                              ",
			"                              ",
      "                              ",
      "                              ",
      "                              ",
      "                              ",
			"                              ",
			"                              ",
      "                              ",
			"                              ",
    ], {
      tileHeight : TILE_SIZE,
      tileWidth : TILE_SIZE,
      tiles : {
            " ": () => [
              k.sprite("Floor", {frame : k.randi(12)}),
              k.scale(4),
              ],
      }
    })

    const LEVEL_AREA: string[] = [
			"qtttttttttttttjktttttttttttttp",
			"l                            r",
			"l                            r",
			"l                            r",
      "l                            r",
      "l                            r",
			"l               jjj          r",
      "l                            r",
      "l                            r",
      "l                            r",
      "l                            r",
			"l                            r",
			"l                            r",
      "l                            r",
			"zbbbbbbbbbbbbbbbbbbbbbbbbbbbbm",
	]

    const LEVEL = createLevel(LEVEL_AREA)
  
      const player = spawnPlayer(15, 12)

      player.onCollide('porta', () => {
        k.go("level4")
      })
      
})