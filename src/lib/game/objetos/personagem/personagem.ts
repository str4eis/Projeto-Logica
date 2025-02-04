import kaboom from "kaboom";

const player = level.spawn([
    k.rect(64,64),
    k.color(0,0,255),
    k.area(),
    k.body(),
    k.anchor("center"),
    "player",
  ], 2, 2)

const dirs = {
  "left": k.LEFT,
  "right": k.RIGHT,
  "up": k.UP,
  "down": k.DOWN,
};

for (const dir in dirs) {
  const key = dir as keyof typeof dirs;
  k.onKeyDown(key, () => {
    player.move(dirs[key].scale(SPEED));
  });
}