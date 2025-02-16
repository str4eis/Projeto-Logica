import k, { SPEED, TILE_SIZE } from "$lib/game/kaplay";
import '$lib/game/scenes/level0';
import '$lib/game/scenes/level1';
import '$lib/game/scenes/level2';
import '$lib/game/scenes/level3';
import '$lib/game/scenes/level4';
import '$lib/game/scenes/level5';
import '$lib/game/scenes/level6';
import '$lib/game/scenes/levelWin';

export const createPlayer = (direction: string) => {
  const player = k.make([
    k.sprite("Kael", { anim: `idle-${direction}` }),
    k.pos(0, 0),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 14, 14),
    }),
    k.body(),
    k.anchor("center"),
    k.scale(4),
    {
      dir: direction
    },
    "player"
  ]);

  return player;
}

export const spawnPlayer = (x: number, y: number, dir: string = 'down') => {
  const player = k.add(createPlayer(dir));
  player.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

  
  k.onKeyDown("left", () => {
    player.flipX = true;
    player.flipY = false;
    player.dir = 'left'
    player.move(-SPEED, 0);

  });

  k.onKeyDown("right", () => {
    player.flipX = false;
    player.flipY = false;
    player.dir = 'right'
    player.move(SPEED, 0);

  });

  k.onKeyDown("up", () => {
    player.flipY = false;
    player.flipX = false;
    player.dir = 'up'
    player.move(0, -SPEED);

  });

  k.onKeyDown("down", () => {
    player.flipY = false;
    player.flipY = false;
    player.dir = 'down'
    player.move(0, SPEED);

  });

  k.onKeyDown("a", () => {
    player.flipX = true;
    player.flipY = false;
    player.dir = 'left'
    player.move(-SPEED, 0);

  });

  k.onKeyDown("d", () => {
    player.flipX = false;
    player.flipY = false;
    player.dir = 'right'
    player.move(SPEED, 0);

  });

  k.onKeyDown("w", () => {
    player.flipY = false;
    player.flipX = false;
    player.dir = 'up'
    player.move(0, -SPEED);

  });

  k.onKeyDown("s", () => {
    player.flipY = false;
    player.flipY = false;
    player.dir = 'down'
    player.move(0, SPEED);

  });

  // Quando soltar qualquer tecla, voltar para a animação "idle"
k.onKeyRelease(() => {
  if (player.dir === 'left') {
    player.play("idle-right"); // Usa "idle-right" para a esquerda com flipX
  } else {
    player.play(`idle-${player.dir}`); // Usa a animação "idle" correspondente
  }
});

  // Debug
  k.onKeyDown("i", () => {
    k.debug.inspect = !k.debug.inspect;
  });

  k.onKeyDown("0", () => {
    k.go("level0");
  });

  k.onKeyDown("1", () => {
    k.go("level1");
  });

  k.onKeyDown("2", () => {
    k.go("level2");
  });

  k.onKeyDown("3", () => {
    k.go("level3");
  });

  k.onKeyDown("4", () => {
    k.go("level4");
  });

  k.onKeyDown("5", () => {
    k.go("level5");
  });

  k.onKeyDown("6", () => {
    k.go("level6");
  });

  k.onKeyDown("7", () => {
    k.go("levelWin");
  });


  const directions: any = {
    "left": "run-right",
    "right": "run-right",
    "up": "run-up",
    "down": "run-down",

    "a": "run-right",
    "d": "run-right",
    "w": "run-up",
    "s": "run-down"
  };

  let activeKeys: any = {};

const keys = ["left", "right", "up", "down", "a", "d", "w", "s"];

keys.forEach((key) => {
  k.onKeyPress(key, () => {
    activeKeys[key] = true;
    player.play(directions[key]);
  });

  k.onKeyRelease(key, () => {
    activeKeys[key] = false;
    if (!Object.values(activeKeys).includes(true)) {
      if(player.dir === 'left') {
        player.play("idle-right");
      } else {
        player.play(`idle-${player.dir}`);
    }
    }
  });
});

// Verifica a cada 100ms se a animação precisa ser corrigida
setInterval(() => {
  if (player.getCurAnim()?.name?.startsWith("idle")) {
    for (const key in activeKeys) {
      if (activeKeys[key]) {
        player.play(directions[key]);
        break; // Garante que só uma animação de movimento seja ativada
      }
    }
  }
}, 100);

// keys.forEach((key) => {
//   k.onKeyPress(key, () => {
//     k.debug.log(player.dir);
//   });
// });


  return player;
};