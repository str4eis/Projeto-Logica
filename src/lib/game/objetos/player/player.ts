import k, {SPEED, TILE_SIZE} from "$lib/game/kaplay";

export const createPlayer = (direction: string) => {
  const player = k.make([
      k.sprite("Kael", {anim : `idle-${direction}`}),
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
      player.move(-SPEED, 0);
      player.dir = 'left'

  });

  k.onKeyDown("right", () => {
      player.flipX = false;
      player.flipY = false;
      player.move(SPEED, 0);
      player.dir = 'right'

  });

  k.onKeyDown("up", () => {
      player.flipY = false;
      player.flipX = false;
      player.move(0, -SPEED);
      player.dir = 'up'

  });

  k.onKeyDown("down", () => {
      player.flipY = false;
      player.flipY = false;
      player.move(0, SPEED);
      player.dir = 'down'

  });

  k.onKeyRelease( () => {
    player.flipY = false;
    player.flipY = false;
    if(player.dir == 'left') {
      player.play("idle-right");
    } else {
      player.play(`idle-${player.dir}`);
   }
  });

  k.onKeyDown("i", () => {
    k.debug.inspect = !k.debug.inspect
});

const directions : any = {
  "left": "run-right",
  "right": "run-right",
  "up": "run-up",
  "down": "run-down"
};


let activeKeys : any = {};

["left", "right", "up", "down"].forEach((key) => {
    k.onKeyPress(key, () => {
        activeKeys[key] = true;
        player.play(directions[key]);
    });

    k.onKeyRelease(key, () => {
        activeKeys[key] = false;
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
}, 250);


  return player;
};