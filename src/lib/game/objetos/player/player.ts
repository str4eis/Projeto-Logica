import k, { GAME, SPEED, TILE_SIZE } from "$lib/game/kaplay";
import { togglePause } from "$lib/game/levelUtils/pauseFunction";
import { playerState } from "$lib/game/gameState";
import "$lib/game/scenes/level0";
import "$lib/game/scenes/level1";
import "$lib/game/scenes/level2";
import "$lib/game/scenes/level3";
import "$lib/game/scenes/level4";
import "$lib/game/scenes/level5";
import "$lib/game/scenes/level6";
import "$lib/game/scenes/levelWin";
import { goto } from "$app/navigation";
import { gameOver } from "$lib/game/levelUtils/gameOver";
import { gameControlsUI } from "$lib/game/levelUtils/gameControlsUI";

export const spawnPlayer = (x: number, y: number, dir: string = "down") => {
  const player = k.add([
    k.sprite("Kael", { anim: `idle-${dir}` }),
    k.pos(x * TILE_SIZE, y * TILE_SIZE),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 14, 14),
    }),
    k.body(),
    k.z(4),

    k.health(playerState.hp, playerState.maxHp),
    k.anchor("center"),
    k.scale(4),
    {
      dir: playerState.dir || dir,
      isAttacking: false,
      canMove: true,
      hasDied: false,
      canPause: true,
    },
    "player",
    "kael",
    "animated",
  ]);

  const movePlayer = (dx: number, dy: number, direction: string) => {
    if (
      player.isAttacking || playerState.hp <= 0 || player.hasDied ||
      !player.canMove
    ) return;
    player.flipX = direction === "left";
    player.flipY = false;
    player.dir = direction;
    player.move(dx, dy);
    playerState.pos = player.pos;
    playerState.dir = direction;
  };

  k.onKeyDown("left", () => movePlayer(-SPEED, 0, "left"));
  k.onKeyDown("right", () => movePlayer(SPEED, 0, "right"));
  k.onKeyDown("up", () => movePlayer(0, -SPEED, "up"));
  k.onKeyDown("down", () => movePlayer(0, SPEED, "down"));

  k.onKeyDown("a", () => movePlayer(-SPEED, 0, "left"));
  k.onKeyDown("d", () => movePlayer(SPEED, 0, "right"));
  k.onKeyDown("w", () => movePlayer(0, -SPEED, "up"));
  k.onKeyDown("s", () => movePlayer(0, SPEED, "down"));

  k.onGamepadStick("left", (v) => {
    if (GAME.paused || !player.canMove || player.isAttacking || player.hasDied) return;
  
    const threshold = 0.2; // Define um limite para evitar movimentos indesejados
    if (Math.abs(v.x) > threshold || Math.abs(v.y) > threshold) {
      const dx = v.x * SPEED;
      const dy = v.y * SPEED;
  
      let direction = "down";
      if (Math.abs(v.x) > Math.abs(v.y)) {
        direction = v.x > 0 ? "right" : "left";
      } else {
        direction = v.y > 0 ? "down" : "up";
      }
  
      movePlayer(dx, dy, direction);
      player.play(directions[direction]);
    }
  });
  
  // Adiciona suporte aos botões do gamepad
  k.onGamepadButtonPress(["south"], () => {
    if (!player.canMove) return;
    attack();
    showHealthUI();
  });
  

  // Quando soltar qualquer tecla, voltar para a animação "idle"
  k.onKeyRelease(() => {
    if (GAME.paused) return;
    if (player.isAttacking || playerState.hp <= 0 || player.hasDied) return;

    if (player.dir === "left") {
      player.play("idle-right"); // Usa "idle-right" para a esquerda com flipX
    } else {
      player.play(`idle-${player.dir}`); // Usa a animação "idle" correspondente
    }
  });

  // Debug
//   k.onKeyDown("i", () => {
//     k.debug.inspect = !k.debug.inspect;
//   });

  // k.onKeyDown("0", () => {
  //   k.go("level0");
  // });

  // k.onKeyDown("1", () => {
  //   k.go("level1");
  // });

  // k.onKeyDown("2", () => {
  //   k.go("level2");
  // });

  // k.onKeyDown("3", () => {
  //   k.go("level3");
  // });

  // k.onKeyDown("4", () => {
  //   k.go("level4");
  // });

  // k.onKeyDown("5", () => {
  //   k.go("level5");
  // });

  // k.onKeyDown("6", () => {
  //   k.go("level6");
  // });

  // k.onKeyDown("7", () => {
  //   k.go("levelWin");
  // });

  // k.onKeyDown("e", () => {
  //   player.heal(5);
  // });

  const directions: any = {
    "left": "run-right",
    "right": "run-right",
    "up": "run-up",
    "down": "run-down",

    "a": "run-right",
    "d": "run-right",
    "w": "run-up",
    "s": "run-down",
  };

  let activeKeys: any = {};

  const keys = ["left", "right", "up", "down", "a", "d", "w", "s"];

  keys.forEach((key) => {
    k.onKeyPress(key, () => {
      if (GAME.paused || !player.canMove) return;

      if (player.isAttacking || !player.canMove || player.hasDied) return;

      activeKeys[key] = true;

      player.play(directions[key]);
    });

    k.onKeyRelease(key, () => {
      if (GAME.paused) return;
      activeKeys[key] = false;
      if (!Object.values(activeKeys).includes(true)) {
        if (player.isAttacking || !player.canMove || player.hasDied) return;

        if (player.dir === "left") {
          player.play(`idle-right`);
        } else {
          player.play(`idle-${player.dir}`);
        }
      }
    });
  });

  // Verifica a cada 100ms se a animação precisa ser corrigida
  setInterval(() => {
    if (GAME.paused || !player.canMove || player.hp() <= 0 || player.hasDied) {
      return;
    }
    if (player.getCurAnim()?.name?.startsWith("idle")) {
      for (const key in activeKeys) {
        if (activeKeys[key]) {
          player.play(directions[key]);
          break; // Garante que só uma animação de movimento seja ativada
        }
      }
    }
  }, 100);

//   keys.forEach((key) => {
//     k.onKeyPress(key, () => {
//       k.debug.log(player.dir);
//     });
//   });

  // Função para realizar o ataque
  const attack = () => {
    if (player.isAttacking || player.hp() <= 0 || player.hasDied) return;

    player.isAttacking = true;
    let attackArea;

    switch (player.dir) {
      case "left":
        player.flipX = true;
        player.play("attack-right");
        attackArea = k.add([
          k.pos(player.pos.x - (TILE_SIZE + 20), player.pos.y),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor("center"),
          k.lifespan(0.25), // Duração da área de ataque
          "attack",
        ]);
        break;
      case "right":
        player.flipX = false;
        player.play("attack-right");
        attackArea = k.add([
          k.pos(player.pos.x + (TILE_SIZE - 20), player.pos.y),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor("center"),
          k.lifespan(0.25), // Duração da área de ataque
          "attack",
        ]);
        break;
      case "up":
        player.flipX = false;
        player.play("attack-up");
        attackArea = k.add([
          k.pos(player.pos.x, player.pos.y - (TILE_SIZE + 20)),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor("center"),
          k.lifespan(0.25), // Duração da área de ataque
          "attack",
        ]);
        break;
      case "down":
        player.flipX = false;
        player.play("attack-down");
        attackArea = k.add([
          k.pos(player.pos.x, player.pos.y + (TILE_SIZE - 20)),
          k.rect(TILE_SIZE, TILE_SIZE),
          k.area(),
          k.opacity(0),
          k.anchor("center"),
          k.lifespan(0.25), // Duração da área de ataque
          "attack",
        ]);
        break;
    }

    // Defina a duração da animação de ataque (em milissegundos)
    const attackDuration = 250; // Ajuste conforme necessário

    // Após a duração da animação de ataque, volte para a animação "idle" e defina isAttacking como false
    setTimeout(() => {
      if (GAME.paused) return;
      player.isAttacking = false;
      if (player.dir === "left") {
        player.play(`idle-right`);
      } else {
        player.play(`idle-${player.dir}`);
      }
    }, attackDuration);
  };


  k.onKeyPress("escape", () => {
    if (!player.canPause) return;
    if (player.hasDied) return;
    activeKeys = {};
    togglePause();
    player.stop();
    player.canMove = !player.canMove;
  });

  k.onKeyPress("p", () => {
    if (!player.canPause) return;
    if (player.hasDied) return;
    togglePause();
    activeKeys = {};
    player.stop();
    player.canMove = !player.canMove;
  });

  k.onClick("pause-btn", () => {
    if (!player.canPause) return;
    if (player.hasDied) return;
    activeKeys = {};
    togglePause();
    player.stop();
    player.canMove = !player.canMove;
  });


  k.onClick("restartButton", (restartButton) => {
    activeKeys = {};
    restartButton.frame = 1;
    k.wait(0.1, () => {
      location.reload();
    });
  });

  k.onClick("controlsButton", (controlsButton) => {
    if (!player.canPause) return;
    player.canPause = false;
    controlsButton.frame = 1;
    gameControlsUI();
    const controls = k.get("controls")[0];

    // Remove qualquer evento de clique anterior no botão de fechar
    k.get("closeButton").forEach((closeButton) => {
        closeButton.off("click");
    });

    k.onClick("closeButton", (closeButton) => {
        k.destroy(controls);
        player.canPause = true;
        controlsButton.frame = 0;
    });
});
  k.onClick("resumeButton", (resumeButton) => {
    activeKeys = {};
    resumeButton.frame = 1;
    k.wait(0.1, () => {
      togglePause();

      player.stop();
      player.canMove = !player.canMove;
    });
  });

  k.onClick("restartButton", (restartButton) => {
    activeKeys = {};
    restartButton.frame = 1;
    k.wait(0.1, () => {
      location.reload();
    });
  });

  k.onClick("controlsButton", (controlsButton) => {
    if (!player.canPause) return;
    player.canPause = false;
    controlsButton.frame = 1;
    gameControlsUI();
    const controls = k.get("controls")[0];

    // Remove qualquer evento de clique anterior no botão de fechar
    k.get("closeButton").forEach((closeButton) => {
        closeButton.off("click");
    });

    k.onClick("closeButton", (closeButton) => {
        k.destroy(controls);
        player.canPause = true;
        controlsButton.frame = 0;
    });
});
  k.onClick("exitButton", (exitButton) => {
    exitButton.frame = 1;
    k.wait(0.1, () => {
      goto("/").then(() => {
        location.reload();
      });
    });
  });

//   Detectar colisão com inimigos
  k.onCollide("attack", "enemy", (attackArea, enemy) => {
    enemy.hurt(1); // Ajuste conforme necessário para causar dano ao inimigo
    // k.debug.log("Enemy hit!", enemy.hp());
    setTimeout(() => {
    }, 100); // Ajuste o tempo conforme necessário
  });

//   // Adiciona o texto do FPS na tela
//   const fpsText = k.add([
//     k.text(`FPS: ${k.debug.fps()}`, { size: 42 }),
//     k.pos(k.width() / 2, 0),
//     k.layer("ui"),
//   ]);

//   k.onUpdate(() => {
//     fpsText.text = `FPS: ${k.debug.fps()}`;
//   });

  const healthFrame = k.add([
    k.sprite("mold"),
    k.scale(5),
    k.pos(10, 10),
    k.layer("ui"),
    k.opacity(1),
  ]);

  const healthBar = k.add([
    k.sprite("bar"),
    k.scale(5),
    k.pos(109, 52),
    k.layer("ui"),
    k.opacity(1),
  ]);

  const pauseButton = k.add([
    k.sprite("pause-btn"),
    k.scale(1.5),
    k.pos(k.width() - 40, 40),
    k.layer("ui"),
    k.area(),
    k.anchor("center"),
    "pause-btn",
  ]);



  let healthUIVisible = true;
  let healthUITimer: number = 3000;

  const showHealthUI = () => {
    if (healthUIVisible) {
      clearTimeout(healthUITimer);
    } else {
      healthBar.hidden = false;
      healthFrame.hidden = false;
      healthBar.opacity = 1;
      healthFrame.opacity = 1;

      healthFrame.fadeIn(0.5);
      healthBar.fadeIn(0.5);

      healthUIVisible = true;
    }

    healthUITimer = setTimeout(() => {
      healthFrame.fadeOut(0.5);
      healthBar.fadeOut(0.5);
      healthUIVisible = false;
    }, 3000);
  };

  k.onKeyPress("space", () => {
    if (!player.canMove) return;
    attack();
    showHealthUI();
  });

  player.onCollide("heart", (heart) => {

    const currentHP = player.hp(); // Obtenha o HP atual do jogador
    const healAmount = 5; // Quantidade de cura padrão
  
    // Verifica se a cura excede o limite máximo de HP
    if (currentHP + healAmount > playerState.maxHp) {
      // Cura apenas o necessário para atingir o máximo
      player.heal(playerState.maxHp - currentHP);
    } else {
      // Cura a quantidade padrão

      player.heal(healAmount);
    }
  
    // Destroi o coração após a cura
    heart.destroy();
  
    // Atualiza a interface de saúde
    showHealthUI();
  });

  // Atualiza a barra de vida com base na porcentagem de vida do jogador
  const updateHealthBar = () => {
    const healthPercentage = player.hp() / playerState.maxHp;
    healthBar.scale.x = healthPercentage * 5; // Ajuste o valor conforme necessário
  };

  // Chame updateHealthBar sempre que a vida do jogador mudar
  player.on("hurt", (amount) => {
    if (!player.canMove) return;
    showHealthUI();

    if (player.hp() <= 0) {
      player.hasDied = true;
      player.canMove = false;
      player.play("dead");
      player.canPause = false;
      k.wait(2.5, () => {
        // Cria o menu com dois botões
        gameOver();
      });
    }

    playerState.hp = player.hp();

    updateHealthBar();
  });
  player.on("heal", (amount) => {
    playerState.hp = player.hp();
    updateHealthBar();
  });

  // Inicialize a barra de vida na criação do jogador
  updateHealthBar();
  showHealthUI();

  return player;
};
