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

    const LEVEL = createLevel(LEVEL5)
    const mob = spawnEnemy(18, 4, "mob", false, "demon")
    const mob1 = spawnEnemy(12, 4, "mob", false, "demon")
    const mob2 = spawnEnemy(10, 4, "mob", false, "demon")
    const mob3 = spawnEnemy(8, 4, "mob", false, "demon")
    const mob4 = spawnEnemy(8, 4, "mob", false, "demon")
    const mob5 = spawnEnemy(8, 4, "mob", false, "demon")
    const player = spawnPlayer(15, 12)

    player.onCollide('porta', () => {
        k.go("level6")
    })

})