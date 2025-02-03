<script lang="ts">
  import kaboom from 'kaboom';
  
  const k = kaboom()
  
  k.scene("main", (levelIdx) => {
    
    const SPEED = 320;
    
    const levels = [
		[
			"===|====",
			"=      =",
			"=      =",
			"=      =",
			"=      =",
			"=      =",
			"========",
		],
		[
			"--------",
			"-      -",
			"-      -",
			"|      -",
			"-      -",
			"-      -",
			"--------",
		],
	]

    const level = k.addLevel(levels[levelIdx], {
          tileHeight: 64,
          tileWidth: 64,
          pos: k.vec2(64,64),
          tiles: {
              " ": () => [
              k.color(255, 0,0),
              k.rect(64,64),
              k.anchor("center")
              ],
  
              "=": () => [
                k.rect(64,64),
                k.color(0,255,0),
                k.area(),
                k.body({isStatic: true}),
                k.anchor("center"),
              ],
              "|": () => [
                k.rect(64,64),
                k.color(255,255,0),
                k.body({isStatic: true}),
                k.anchor("center"),
                k.area(),
                "porta",
              ],
              "-": () => [
                k.rect(64,64),
                k.color(0,255,255),
                k.area(),
                k.body({isStatic: true}),
                k.anchor("center"),
              ],
              "@": () => [
                k.rect(64,64),
                k.color(0,255,255),
                k.area(),
                k.body(),
                k.anchor("center"),
                "player"
              ],
          }
      })
    
      const player = level.get("player")[0]

      // Verifica colisão entre o jogador e a porta
      player.onCollide("porta", () => {
        const nextLevelIdx = levelIdx + 1;
        if (nextLevelIdx < levels.length) {
          k.go("main", nextLevelIdx);
        } 

      });

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
  })
  

  k.go('main', 0)

</script>

<main>
  <div id="game-container"></div>
</main>