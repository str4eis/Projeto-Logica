import k, {SPEED, TILE_SIZE} from "../kaplay";  
import { spawnPlayer } from "../objetos/player/player";

import './level1'

  k.scene( 'levelWin', () => {
    
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

    const LEVEL = k.addLevel(LEVEL_AREA, {
          tileHeight: TILE_SIZE,
          tileWidth: TILE_SIZE,
          tiles: {
              "t": () => [
                  k.sprite("Wall-middle", {frame : k.randi(4)}),
                  k.scale(4),
                  k.area(),
                  k.body({isStatic: true}),
                ],
              "q": () => [
                k.sprite("Wall-top-left"),
                k.scale(4),
                k.area(),
                k.body({isStatic: true}),
              ],
              "p": () => [
                k.sprite("Wall-top-right"),
                k.scale(4),
                k.area(),
                k.body({isStatic: true}),
              ],
              "z": () => [
                k.sprite("Wall-bottom-left"),
                k.scale(4),
                k.area(),
                k.body({isStatic: true}),
              ],
              "m": () => [
                k.sprite("Wall-bottom-right"),
                k.scale(4),
                k.area(),
                k.body({isStatic: true}),
              ],
              "l": () => [
                k.sprite("Wall-side-left"),
                k.scale(4),
                k.area(),
                k.body({isStatic: true}),
              ],
              "r": () => [
                k.sprite("Wall-side-right"),
                k.scale(4),
                k.area(),
                k.body({isStatic: true}),
              ],
              "j": () => [
                k.sprite("Door-left"),
                k.scale(4),
                k.body({isStatic: true}),
                k.area(),
                "porta",
              ],
              "k": () => [
                k.sprite("Door-right"),
                k.scale(4),
                k.body({isStatic: true}),
                k.area(),
                "porta",
              ],
              "b": () => [
                k.sprite("Wall-bottom-middle", {frame : k.randi(4)}),
                k.scale(4),
                k.body({isStatic: true}),
                k.area(),
                "porta",
              ],
              
          }
      })
  
      const player = spawnPlayer(15, 12)

      player.onCollide('porta', () => {
        window.location.href = "/"
      })
})
