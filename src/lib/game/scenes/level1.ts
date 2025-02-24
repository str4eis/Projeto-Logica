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
  //decoração
  //tochas
  const torch1: GameObj = spawnObject(16, 0, "torch", true, "Torch", true);
  const torch2: GameObj = spawnObject(13, 0, "torch", true, "Torch", true);
  //bandeiras
  const flag1: GameObj = spawnObject(7, 0, "flag", true, "Flag", true);
  const flag2: GameObj = spawnObject(4, 0, "flag", true, "Flag", true);
  //candelabros
  const candlestick1: GameObj = spawnObject(2, 2, "candlestick", true, "Big-candlestick", true);
  const candlestick2: GameObj = spawnObject(27, 2, "candlestick", true, "Big-candlestick", true);
  const candlestick3: GameObj = spawnObject(3, 11, "candlestick", true, "Small-candlestick", true);
  const candlestick4: GameObj = spawnObject(26, 11, "candlestick", true, "Small-candlestick", true);
  //teias
  const teia1: GameObj = spawnObject(1,k.randi(3, 10), "teia", true, "Left-spider-web", false,false);
  const teia2: GameObj = spawnObject(28, k.randi(3, 10), "teia", true, "Right-spider-web", false,false);
  //pedras
  const stone1: GameObj = spawnObject(k.randi(2, 9), k.randi(1, 13), "stone", true, "Small-stones", false, false);
  const stone2: GameObj = spawnObject(k.randi(2, 9), k.randi(1, 13), "stone", true, "Big-stones", false,false);
  const stone3: GameObj = spawnObject(k.randi(12, 17), k.randi(1, 13), "stone", true, "Small-stones", false, false);
  const stone4: GameObj = spawnObject(k.randi(12, 17), k.randi(1, 13), "stone", true, "Big-stones", false,false);
  const stone5: GameObj = spawnObject(k.randi(20, 28), k.randi(1, 13), "stone", true, "Small-stones", false, false);
  const stone6: GameObj = spawnObject(k.randi(20, 28), k.randi(1, 13), "stone", true, "Big-stones", false,false);
  //caveiras e ossos
  const caveira1: GameObj = spawnObject(k.randi(2, 9), k.randi(1, 13), "caveira", true, "Bones", false, false);
  const caveira2: GameObj = spawnObject(k.randi(2, 9), k.randi(1, 13), "caveira", true, "Skull-and-bone", false, false);
  const caveira3: GameObj = spawnObject(k.randi(12, 17), k.randi(1, 13), "caveira", true, "Bones", false, false);
  const caveira4: GameObj = spawnObject(k.randi(12, 17), k.randi(1, 13), "caveira", true, "Skull-and-bone", false, false);
  const caveira5: GameObj = spawnObject(k.randi(20, 28), k.randi(1, 13), "caveira", true, "Bones", false, false);
  const caveira6: GameObj = spawnObject(k.randi(20, 28), k.randi(1, 13), "caveira", true, "Skull-and-bone", false, false);
  //mobs
  const mob1: GameObj = spawnEnemy(k.randi(2, 9), k.randi(1, 7), "mob", false, "ze")
  const mob2: GameObj = spawnEnemy(k.randi(2, 9), k.randi(1, 7), "mob", false, "ze")
  const mob3: GameObj = spawnEnemy(k.randi(12, 17), k.randi(1, 7), "mob", false, "ze")
  const mob4: GameObj = spawnEnemy(k.randi(12, 17), k.randi(1, 7), "mob", false, "ze")
  const mob5: GameObj = spawnEnemy(k.randi(20, 28), k.randi(1, 7), "mob", false, "ze")
  const mob6: GameObj = spawnEnemy(k.randi(20, 28), k.randi(1, 7), "mob", false, "ze")
  //player
  const player: GameObj = spawnPlayer(15, 12,)

  player.onCollide('porta', () => {
    k.go("level2")
  })

})

