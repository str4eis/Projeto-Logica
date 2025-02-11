import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnObject } from "../levelUtils/imports";
import { LEVEL0 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
import { spawnBoss } from "../objetos/enemy/boss";
import { updateObjectFlipX } from "../objetos/object";
import './level1';

await loadSprites(k);

k.scene('level0', () => {
  k.setBackground(62, 137, 72);

  k.addLevel(FLOOR, {
    tileHeight: TILE_SIZE,
    tileWidth: TILE_SIZE,
    tiles: {
      " ": () => {
        const tileType = k.choose(["Marked-grass", "Grass", "Grass", "Grass", "Grass", "Grass", "Grass"]);
        if (tileType === "Grass") {
          return [
            k.sprite("Grass"),
            k.scale(4),
          ];
        } else {
          return [
            k.sprite("Marked-grass", {
              frame: k.randi(3),
              flipX: k.choose([true, false]),
              flipY: k.choose([true, false]),
            }),
            k.scale(4),
          ];
        }
      },
    },
  });


  const LEVEL = createLevel(LEVEL0);

  const npc = spawnObject(17, 4, "npc", true, "Npc", true);
  const player = spawnPlayer(15, 12);

// const  Boss=spawnBoss(14,6,"B",false,"Ogre")
// const  Boss2=spawnBoss(16,6,"B",false,"Demon")
// const  Boss3=spawnBoss(18,6,"B",false,"Ze")



  // Árvores lado direito
  spawnObject(28, 12, "tree", true, "Small-tree", false);
  spawnObject(26, -1, "tree", true, "Small-tree", false);
  spawnObject(25, 5, "tree", true, "Small-tree-cut", false);
  spawnObject(28, 2, "tree", true, "Small-tree-cut", false);
  spawnObject(22, -1, "tree", true, "Tree", false);
  spawnObject(26, 2, "tree", true, "Tree", false);
  spawnObject(24, 12, "tree", true, "Tree", false);

  // Árvores do lado esquerdo
  spawnObject(3, 2, "tree", true, "Small-tree", false);
  spawnObject(4, 8, "tree", true, "Small-tree", false);
  spawnObject(6, 0, "tree", true, "Small-tree-cut", false);
  spawnObject(8, 6, "tree", true, "Small-tree-cut", false);
  spawnObject(2, 4, "tree", true, "Tree", false);
  spawnObject(1, -1, "tree", true, "Tree", false);
  spawnObject(7, 9, "tree", true, "Tree", false);
  spawnObject(1, 10, "tree", true, "Tree", false);

  player.onCollide('porta', () => {
    k.go("level1");
  });

  player.onCollide('npc', () => {
    startDialogue();
  });

  k.onUpdate(() => {
    updateObjectFlipX(npc, player);
  });

  function startDialogue() {
    k.scene('dialogue', () => {
      k.setBackground(0, 0, 0);
  
      type CharacterData = {
        sprite: string;
        name: string;
      };
  
      type Characters = {
        Kael: CharacterData;
        Npc: CharacterData;
        Narrador: CharacterData; // Adicionando o narrador
      };
  
      const characters: Characters = {
        Kael: {
          sprite: "Kael",
          name: "Kael",
        },
        Npc: {
          sprite: "Npc",
          name: "Npc",
        },
        Narrador: {
          sprite: "", // Narrador não tem sprite
          name: "Narrador",
        },
      };
  
      const dialogs: [string, string][] = [
        ["Kael", "Quem diabos é você?"],
        ["Npc", "Um viajante, assim como você… Mas diferente de você, eu conheço os perigos desta floresta."],
        ["Kael", "Se é um aviso, guarde para si. Eu sei me cuidar."],
        ["Npc", "Ah, eu não duvido. Mas há algo que você ainda não entende… Não é você quem escolhe o caminho. O caminho escolhe você."],
        ["Kael", "Do que está falando?"],
        ["Npc", "Você já pisou onde não devia. Agora, o destino selará seu futuro."],
        ["Narrador", "O encapuzado levanta a mão, e um círculo arcano se forma sob os pés de Kael. Correntes sombrias emergem, prendendo seus braços e pernas."],
        ["Kael", "O quê?! Maldito! O que você está fazendo?!"], 
        ["Npc", "Você será uma peça importante no jogo. Se sobreviver… talvez nos encontremos de novo."],
        ["Narrador", "Com um último gesto do encapuzado, as correntes brilham intensamente, e Kael é sugado por um vórtice negro. A floresta desaparece, dando lugar a escuridão total… Até que ele desperta na Dungeon of Eternity."]
      ];
  
      let curDialog = 0;
      let isTalking = false;
      let currentText = "";
      let currentIndex = 0;
  
      const textbox = k.add([
        k.rect(k.width() - 140, 140, { radius: 4 }),
        k.anchor("center"),
        k.pos(k.center().x, k.height() - 100),
        k.outline(4),
        k.color(150, 150, 150), // Cor da textbox
      ]);
  
      const txt = k.add([
        k.text("", {
          size: 32,
          width: k.width() - 230,
          align: "center",
        }),
        k.color(0, 0, 0), // Texto preto
        k.pos(textbox.pos),
        k.anchor("center"),
      ]);
  
      const avatar = k.add([
        k.sprite("Kael"),
        k.scale(14),
        k.anchor("center"),
        k.pos(k.center().sub(0, 50)),
      ]);
    
      k.onKeyPress("space", () => {
        if (isTalking) return;
  
        if (curDialog >= dialogs.length - 1) {
          k.go("level1"); 
        } else {
          curDialog++;
          updateDialog();
        }
      });
  
      function updateDialog() {
        const [char, dialog] = dialogs[curDialog];
        if (char === "Narrador") {
          // Esconde o avatar e a textbox para o narrador
          avatar.hidden = true;
          textbox.hidden = true;
          txt.pos = k.center(); // Centraliza o texto na tela
          txt.color = k.Color.fromHex("#FFFFFF"); // Texto branco
        } else {
          // Mostra o avatar e a textbox para personagens normais
          avatar.hidden = false;
          textbox.hidden = false;
          avatar.use(k.sprite(characters[char as keyof typeof characters].sprite));
          txt.pos = textbox.pos; // Volta o texto para a caixa de diálogo
          txt.color = k.Color.fromHex("#000000"); // Texto preto
        }
        startWriting(dialog, char);
        
      }
  
      function startWriting(dialog: string, char: string) {
        isTalking = true;
        currentText = dialog;
        currentIndex = 0;
        txt.text = "";
  
        const writing = k.loop(0.03, () => {
          if (currentIndex < currentText.length) {
            txt.text += currentText[currentIndex];
            currentIndex++;
          } else {
            isTalking = false;
            writing.cancel();
          }
        });
      }
  
      updateDialog();
    });
  
    k.go('dialogue');
  }
})