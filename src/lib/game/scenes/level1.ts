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
  //mobs
  const mob1: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob2: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob3: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob4: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  const mob5: GameObj = spawnEnemy(k.randi(1, 28), k.randi(1, 7), "mob", false, "ze")
  //decoração
  const torch1: GameObj = spawnObject(16, 0, "torch", true, "Torch", true);
  const torch2: GameObj = spawnObject(13, 0, "torch", true, "Torch", true);
  const flag1: GameObj = spawnObject(12, 0, "flag", true, "Flag", true);
  const flag2: GameObj = spawnObject(17, 0, "flag", true, "Flag", true);
  const candlestick1: GameObj = spawnObject(1, 1, "candlestick", true, "Big-candlestick", true);
  const candlestick2: GameObj = spawnObject(28, 1, "candlestick", true, "Big-candlestick", true);
  const teia1: GameObj = spawnObject(1, 4, "teia", true, "Left-spider-web", false);
  const teia2: GameObj = spawnObject(28, 4, "teia", true, "Right-spider-web", false);
  const stone1: GameObj = spawnObject(28, 6, "stone", true, "Small-stones", false);
  const stone2: GameObj = spawnObject(3, 8, "stone", true, "Big-stones", false);
  //player
  const player: GameObj = spawnPlayer(15, 12,)

  player.onCollide('porta', () => {
    k.go("level2")
  })

})

