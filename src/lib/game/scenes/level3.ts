import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy } from "../levelUtils/imports";
import { LEVEL3 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import './level4'
await loadSprites(k)

k.scene('level3', () => {

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

  const LEVEL = createLevel(LEVEL3)
  const mob = spawnEnemy(18, 4, "mob", false, "ogre")
  const mob1 = spawnEnemy(12, 4, "mob", false, "ogre")
  const mob2 = spawnEnemy(10, 4, "mob", false, "ogre")
  const mob3 = spawnEnemy(8, 4, "mob", false, "ogre")
  const mob4 = spawnEnemy(8, 4, "mob", false, "ogre")
  const mob5 = spawnEnemy(8, 4, "mob", false, "ogre")
  const player = spawnPlayer(15, 12)

  player.onCollide('porta', () => {
    k.go("level4")
  })

})