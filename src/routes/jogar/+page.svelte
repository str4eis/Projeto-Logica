<script lang="ts">
  import { onMount } from 'svelte';
  import kaboom from 'kaboom';
  import { assets } from '$app/paths';

  onMount(async () => {
    const gameContainer = document.getElementById('game-container');

    if (!gameContainer) {
      console.error("Game container not found!");
      return;
    }

    const k = kaboom({
      background: [74, 48, 82],
      width: 800,
      height: 600,
      canvas: gameContainer,
    });

    k.loadSprite("parede", assets + "/sprits/parede.png");
    k.loadSprite("player", assets + "/sprits/player.png");

    k.scene("main", (levelIdx) => {
      const SPEED = 320;

      const levels = [
        [
          "========",
          "=      =",
          "=      =",
          "=      =",
          "=      =",
          "=   @  =",
          "========",
        ],
      ];

      const level = k.addLevel(levels[levelIdx], {
        tileWidth: 64,
        tileHeight: 64,
        pos: k.vec2(0, 0),
        tiles: {
          "=": () => [
            k.sprite("parede"),
            k.area(),
            k.body({ isStatic: true }),
            k.anchor("center"),
          ],
          "@": () => [
            k.sprite("player"),
            k.area(),
            k.body(),
            k.anchor("center"),
            "player",
          ],
        },
      });

      const player = level.get("player")[0];

      // Correct way to access Kaboom constants!
      const dirs = {
        "left": k.LEFT,  // Use k.LEFT
        "right": k.RIGHT, // Use k.RIGHT
        "up": k.UP,     // Use k.UP
        "down": k.DOWN,   // Use k.DOWN
      };

      k.keyLeft("left", () => player.move(-SPEED, 0));
      k.keyRight("right", () => player.move(SPEED, 0));
      k.keyUp("up", () => player.move(0, -SPEED));
      k.keyDown("down", () => player.move(0, SPEED));

    });

    k.go("main", 0);
  });
</script>

<main>
  <div id="game-container"></div>
</main>

<style>
  
  .body{
    background-color: aliceblue;
  }

</style>