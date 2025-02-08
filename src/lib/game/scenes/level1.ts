import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy, spawnObject } from "../levelUtils/imports";
import { LEVEL1 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import './level2'
await loadSprites(k)

k.scene('level1', () => {

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

  const LEVEL = createLevel(LEVEL1)
  // const mob = spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ze")
  // const mob1 = spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ze")
  // const mob2= spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ze")
  // const mob3 = spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ze")
  // const mob4 = spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ze")
  // const mob5 = spawnEnemy(k.randi(1,28),k.randi(1,7),"mob", false, "ze")
  const player = spawnPlayer(15, 12,)
  const torch = spawnObject(2,0,"torch",true,"Front-torch", false)
  const torch2 = spawnObject(12,0,"torch",true,"Front-torch", false)
  const torch3 = spawnObject(7,0,"torch",true,"Front-torch", false)
  const torch4 = spawnObject(17,0,"torch",true,"Front-torch", false)
  const torch5 = spawnObject(22,0,"torch",true,"Front-torch", false)
  const torch6 = spawnObject(27,0,"torch",true,"Front-torch", false)

  player.onCollide('porta', () => {
    k.go("level2")
  })

})

