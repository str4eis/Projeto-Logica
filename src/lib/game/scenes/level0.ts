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

  const npc = spawnObject(17,4,"npc",true,"Npc", true)
  const player = spawnPlayer(15, 12)

  //arvores lado direito
  const tree9 = spawnObject(28,12,"tree",true,"Small-tree", false)
  const tree10 = spawnObject(26,-1,"tree",true,"Small-tree", false)
  const tree11 = spawnObject(25,5,"tree",true,"Small-tree-cut", false)
  const tree12 = spawnObject(28,2,"tree",true,"Small-tree-cut", false)
  const tree6 = spawnObject(22,-1,"tree",true,"Tree", false)
  const tree7 = spawnObject(26,2,"tree",true,"Tree", false)
  const tree8 = spawnObject(24,12,"tree",true,"Tree", false)

  //arvores do lado esquerdo
  const tree13 = spawnObject(3,2,"tree",true,"Small-tree", false)
  const tree14 = spawnObject(4,8,"tree",true,"Small-tree", false)
  const tree15 = spawnObject(6,0,"tree",true,"Small-tree-cut", false)
  const tree16 = spawnObject(8,6,"tree",true,"Small-tree-cut", false)
  const tree1 = spawnObject(2,4,"tree",true,"Tree", false)
  const tree2 = spawnObject(1,-1,"tree",true,"Tree", false)
  const tree4 = spawnObject(7,9,"tree",true,"Tree", false)
  const tree5 = spawnObject(1,10,"tree",true,"Tree", false)
  
  
  // const tree8 = spawnObject(22,-1,"tree",true,"Tree", false)
  // const tree9 = spawnObject(22,-1,"tree",true,"Tree", false)

  player.onCollide('porta', () => {
    k.go("level1")
  })

  k.onUpdate(() => {
    updateObjectFlipX(npc, player);
  });

    // npc.angle = k.choose([0, 90, 180, 270]); 

})

