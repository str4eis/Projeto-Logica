import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy } from "../levelUtils/imports";
import { LEVEL4 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import { spawnBoss } from "../objetos/enemy/boss";
import './level5'
await loadSprites(k)

k.scene('level4', () => {

    k.setBackground(37,19,26);

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

    const LEVEL = createLevel(LEVEL4)

    const player = spawnPlayer(15, 12)

    const boss = spawnBoss(17,4,"Boss",false,"Ogre")
    const mob1 = spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ogre")
    const mob2= spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ogre")
      

    player.onCollide('porta', () => {
        k.go("level5")
    })

})