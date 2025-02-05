import k, {SPEED, TILE_SIZE} from "$lib/game/kaplay";

export const createPlayer = () => {
  const player = k.make([
      k.sprite("Kael", {anim : "idle-down"}),
      k.pos(0, 0), 
      k.area({
        shape: new k.Rect(k.vec2(0, 0), 14, 14),
      }),
      k.body(),       
      k.anchor("center"), 
      k.scale(4),
      
      "player"
  ]);

  return player;    
}

export const spawnPlayer = (x: number, y: number) => {
  const player = k.add(createPlayer());
  player.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

  k.onKeyDown("left", () => {
      player.flipX = true;
      player.flipY = false;
      player.play("run-right");
      player.move(-SPEED, 0);

  });

  k.onKeyDown("right", () => {
      player.flipX = false;
      player.flipY = false;
      player.play("run-right");
      player.move(SPEED, 0);
  });

  k.onKeyDown("up", () => {
      player.flipY = false;
      player.flipX = false;
      player.play("run-up");
      player.move(0, -SPEED);
  });

  k.onKeyDown("down", () => {
      player.flipY = false;
      player.flipY = false;
      player.play("run-down");
      player.move(0, SPEED);
  });

  k.onKeyRelease( () => {
    player.flipY = false;
    player.flipY = false;
    player.play("idle-down");
  });

  k.onKeyDown("space", () => {
    k.debug.inspect = !k.debug.inspect
});

["left", "right", "up", "down"].forEach((key) => {
    
    k.onKeyRelease(key, () => {
        if (
            !k.isKeyDown("left")
            && !k.isKeyDown("right")
            && !k.isKeyDown("up")
            && !k.isKeyDown("down")
        ) {
            player.play("idle-down");
        }
    });
});

  return player;
};