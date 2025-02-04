import k, {SPEED, TILE_SIZE} from "$lib/game/kaplay";

export const createPlayer = () => {
  const player = k.make([
      k.rect(64, 64),
      k.color(60, 100, 160),
      k.pos(0, 0), 
      k.area(),       
      k.body(),       
      k.anchor("center"), 
      
      "player"
  ]);

  return player;
}

export const spawnPlayer = (x: number, y: number) => {
  const player = k.add(createPlayer());
  player.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

  k.onKeyDown("left", () => {
      player.move(-SPEED, 0);
  });

  k.onKeyDown("right", () => {
      player.move(SPEED, 0);
  });

  k.onKeyDown("up", () => {
      player.move(0, -SPEED);
  });

  k.onKeyDown("down", () => {
      player.move(0, SPEED);
  });


  return player;
};