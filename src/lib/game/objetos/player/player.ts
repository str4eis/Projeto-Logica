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
      dir: direction,
      isAttacking: false
    },
    "player",
    "kael"
  ]);

  return player;
}

export const spawnPlayer = (x: number, y: number, dir: string = 'down') => {
  const player = k.add(createPlayer(dir));
  player.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

  const movePlayer = (dx: number, dy: number, direction: string) => {
    if (player.isAttacking) return;
    player.flipX = direction === 'left';
    player.flipY = false;
    player.dir = direction;
    player.move(dx, dy);
  };

  k.onKeyDown("left", () => movePlayer(-SPEED, 0, 'left'));
  k.onKeyDown("right", () => movePlayer(SPEED, 0, 'right'));
  k.onKeyDown("up", () => movePlayer(0, -SPEED, 'up'));
  k.onKeyDown("down", () => movePlayer(0, SPEED, 'down'));

  k.onKeyDown("a", () => movePlayer(-SPEED, 0, 'left'));
  k.onKeyDown("d", () => movePlayer(SPEED, 0, 'right'));
  k.onKeyDown("w", () => movePlayer(0, -SPEED, 'up'));
  k.onKeyDown("s", () => movePlayer(0, SPEED, 'down'));

  // Quando soltar qualquer tecla, voltar para a animação "idle"
  k.onKeyRelease(() => {
    if (player.isAttacking) return;

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
      if (player.isAttacking) return;

      activeKeys[key] = true;

      player.play(directions[key]);
    });

    k.onKeyRelease(key, () => {
      activeKeys[key] = false;
      if (!Object.values(activeKeys).includes(true)) {
        if (player.dir === 'left') {
          player.play(`idle-right`);
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

  keys.forEach((key) => {
    k.onKeyPress(key, () => {
      k.debug.log(player.dir);
    });
  });

  // Função para realizar o ataque
  const attack = () => {
    if (player.isAttacking) return;

    player.isAttacking = true;
    let attackArea;

    switch (player.dir) {
      case 'left':
        player.flipX = true;
        player.play('attack-right');
        attackArea = k.add([
          k.pos(player.pos.x - (TILE_SIZE + 20), player.pos.y),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor('center'),
          k.lifespan(0.25), // Duração da área de ataque
          "attack"
        ]);
        break;
      case 'right':
        player.flipX = false;
        player.play('attack-right');
        attackArea = k.add([
          k.pos(player.pos.x + (TILE_SIZE - 20), player.pos.y),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor('center'),
          k.lifespan(0.25), // Duração da área de ataque
          "attack"
        ]);
        break;
      case 'up':
        player.flipX = false;
        player.play('attack-up');
        attackArea = k.add([
          k.pos(player.pos.x, player.pos.y - (TILE_SIZE + 20)),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor('center'),
          k.lifespan(0.25), // Duração da área de ataque
          "attack"
        ]);
        break;
      case 'down':
        player.flipX = false;
        player.play('attack-down');
        attackArea = k.add([
          k.pos(player.pos.x, player.pos.y + (TILE_SIZE - 20)),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor('center'),
          k.lifespan(0.25), // Duração da área de ataque
          "attack"
        ]);
        break;
    }

    // Defina a duração da animação de ataque (em milissegundos)
    const attackDuration = 250; // Ajuste conforme necessário

    // Após a duração da animação de ataque, volte para a animação "idle" e defina isAttacking como false
    setTimeout(() => {
      player.isAttacking = false;
      if (player.dir === 'left') {
        player.play(`idle-right`);
      } else {
        player.play(`idle-${player.dir}`);
      }
    }, attackDuration);
  };

  // Evento de tecla para ataque (por exemplo, tecla "space")
  k.onKeyPress("space", () => {
    attack();
  });

  // Detectar colisão com inimigos
  k.onCollide("attack", "enemy", (attackArea, enemy) => {
    enemy.hurt(1); // Ajuste conforme necessário para causar dano ao inimigo
    k.debug.log("Enemy hit!", enemy.hp());
    setTimeout(() => {
    }, 100); // Ajuste o tempo conforme necessário
  });

  return player;
};