import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnEnemy, spawnObject } from "../levelUtils/imports";
import { LEVEL0 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import { updateObjectFlipX } from "../objetos/object";
import './level1'
await loadSprites(k)

k.scene('level0', () => {
  
k.setBackground(62, 137, 72);

k.addLevel(FLOOR, {
  tileHeight: TILE_SIZE,
  tileWidth: TILE_SIZE,
  tiles: {
      " ": () => {
          // Escolhe aleatoriamente entre "Grass" e "Marked-grass"
          const tileType = k.choose(["Marked-grass","Grass","Grass","Grass","Grass", "Grass", "Grass"]);

          if (tileType === "Grass") {
              // Retorna o tile "Grass"
              return [
                  k.sprite("Grass"),
                  k.scale(4),
              ];
          } else {
              // Retorna o tile "Marked-grass" com frame e rotação aleatórios
              return [
                  k.sprite("Marked-grass", { 
                    frame: k.randi(3),
                    flipX: k.choose([true,false]),
                    flipY: k.choose([true,false]),
                  }),
                  k.scale(4),
              ];
          }
      },
  },
});

  const LEVEL = createLevel(LEVEL0)
  const npc = spawnObject(28,12,"npc")
  const player = spawnPlayer(15, 12)


  player.onCollide('porta', () => {
    k.go("level1")
  })

  k.onUpdate(() => {
    updateObjectFlipX(npc, player);
  });

    // npc.angle = k.choose([0, 90, 180, 270]); 

})

