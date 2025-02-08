import { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnObject } from "../levelUtils/imports";
import { LEVEL0 } from "../levelUtils/levelLayout";
import { FLOOR } from "../levelUtils/levelLayout";
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
      k.setBackground(255, 184, 121);

      type CharacterData = {
        sprite: string;
        name: string;
      };

      type Characters = {
        Kael: CharacterData;
        Npc: CharacterData;
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
      };

      const dialogs = [
        ["Kael", "Olá! Como você está?"],
        ["Npc", "Estou bem, obrigado! E você?"],
        ["Kael", "Também estou bem, pronto para a aventura!"],
        ["Npc", "Boa sorte então!"],
        ["Kael", "Obrigado!"],
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
      ]);

      const txt = k.add([
        k.text("", {
          size: 32,
          width: k.width() - 230,
          align: "center",
        }),
        k.color(0, 0, 0), // Define a cor preta corretamente
        k.pos(textbox.pos),
        k.anchor("center"),
      ]);
      

      const avatar = k.add([
        k.sprite("Kael"),
        k.scale(14),
        k.anchor("center"),
        k.pos(k.center().sub(0, 50)),
      ]);

      type Effects = {
        shake: () => void;
      };

      const effects: Effects = {
        shake: () => {
          k.shake();
        },
      };

      k.onKeyPress("space", () => {
        if (isTalking) return;
      
        if (curDialog >= dialogs.length - 1) {
          k.go("level0"); // Volta para o jogo quando o diálogo termina
        } else {
          curDialog++;
          updateDialog();
        }
      });
      

      function updateDialog() {
        const [char, dialog, eff] = dialogs[curDialog];
        avatar.use(k.sprite(characters[char as keyof typeof characters].sprite));
        startWriting(dialog, char);

        if (eff) {
          effects[eff as keyof Effects]();
        }
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
});
