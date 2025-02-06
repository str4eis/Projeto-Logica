import k, {createLevel, loadSprites, SPEED, TILE_SIZE} from "../kaplay";  
import { spawnPlayer } from "../objetos/player/player";

import './level1'

await loadSprites(k)

  k.scene( 'level0', () => {
    
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
			"l                            r",
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
        k.go("level1")
      })

})

