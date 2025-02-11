import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy } from "../levelUtils/imports";
import { LEVEL6 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import { spawnBoss } from "../objetos/enemy/boss";
import './levelWin.ts'
await loadSprites(k)

k.scene('level6', () => {

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

    const LEVEL = createLevel(LEVEL6)

    const player = spawnPlayer(15, 12)

    const boss = spawnBoss(17, 4, "Boss", false, "Demon")
    const mob1 = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const mob2 = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")
    const mob3 = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "demon")


    player.onCollide('porta', () => {
        k.go("levelWin")
    })

})