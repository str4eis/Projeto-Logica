import type { GameObj } from "kaplay";
import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy, spawnObject } from "../levelUtils/imports";
import { LEVEL1 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import { spawnBoss } from "../objetos/enemy/boss";
import './level2'
await loadSprites(k)

k.scene('level1', () => {

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

  const LEVEL: GameObj = createLevel(LEVEL1)
  const mob1: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob2: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob3: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob4: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob5: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const player: GameObj = spawnPlayer(15, 12,)

  player.onCollide('porta', () => {
    k.go("level2")
  })

})

