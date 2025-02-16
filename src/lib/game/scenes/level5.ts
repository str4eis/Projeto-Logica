import type { GameObj } from "kaplay";
import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy } from "../levelUtils/imports";
import { LEVEL5 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import './level6.ts'
await loadSprites(k)

k.scene('level5', () => {

    k.setBackground(37, 19, 26);

    k.addLevel(FLOOR, {
        tileHeight: TILE_SIZE,
        tileWidth: TILE_SIZE,
        tiles: {
            " ": () => [
                k.sprite("Floor", { frame: k.randi(12) }),
                k.scale(4),
            ],
        }
    })

    const LEVEL: GameObj = createLevel(LEVEL5)
    const mob1: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const mob2: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const mob3: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const mob4: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const mob5: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const player: GameObj = spawnPlayer(15, 12)

    player.onCollide('porta', () => {
        k.go("level6")
    })

})