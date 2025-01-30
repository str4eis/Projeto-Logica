<script lang="ts">
    import { onMount } from "svelte";
  
    // Player (atributos do jogador)
    class Player {
      top: number;
      bottom: number;
  
      left: number;
      right: number;
      
      height: number;
      width: number;
  
      lastDirection: string = ''
  
      calcRight(): void {
        this.right = this.left + this.width
      };
  
      calcBottom(): void {
        this.bottom = this.top + this.height
      };
  
      constructor(top: number, left: number, height: number, width: number, lastDirection?: string) {
        this.top = top
        this.left = left
        
        this.height = height
        this.width = width
        
  
        this.right = this.left + this.width
        this.bottom = this.top + this.height
      }
    }
  
  
    let bullets: any = [];
  
    function shoot() {
      const speed = 30;
      let dx = 0, dy = 0;
  
      switch (player.lastDirection) {
        case "up": dy = -speed; break;
        case "down": dy = speed; break;
        case "left": dx = -speed; break;
        case "right": dx = speed; break;
      }
  
      bullets.push({
        top: player.top + player.height / 2 - 5,
        left: player.left + player.width / 2 - 5,
        width: 10,
        height: 10,
        dx,
        dy
      });
    }
  
    function updateBullets() {
      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].top += bullets[i].dy;
        bullets[i].left += bullets[i].dx;
  
        // Remover balas que saíram da tela
        if (
          bullets[i].top < 0 || bullets[i].top > 700 ||
          bullets[i].left < 0 || bullets[i].left > 1200
        ) {
          bullets.splice(i, 1);
        }
      }
    }
  
  
    let player: Player = new Player(0, 0, 50, 50)
  
    // Lista de obstáculos
    let obstacles = [
      { top: getRandomY(), left: getRandomX(), width: 100, height: 100 },
      { top: getRandomY(), left: getRandomX(), width: 100, height: 100 },
      { top: getRandomY(), left: getRandomX(), width: 100, height: 100 }
    ];
  
    function getRandomX() {
      return Math.min((Math.floor(Math.random() * 120) * 10), 1100)
    }
  
    function getRandomY() {
      return Math.min((Math.floor(Math.random() * 70) * 10), 550)
    }
  
    // Função para verificar colisão com qualquer obstáculo
    function checkCollision() {
      return obstacles.some(obstacle => {
  
        const obstacleRight = obstacle.left + obstacle.width;
        const obstacleBottom = obstacle.top + obstacle.height;
  
        return (
          player.left < obstacleRight &&
          player.right > obstacle.left &&
          player.top < obstacleBottom &&
          player.bottom > obstacle.top
        );
      });
    }
  
    // Função para mover o player
    function playerControls(event: KeyboardEvent) {
      const step = 10; // Quantidade de pixels por movimento
      const previousPosition = { ...player }; // Copia os atributos do player em um novo objeto
  
      switch (event.key) {
        case 'ArrowUp':
          player.top = Math.max(player.top - step, 0);
          player.calcBottom()
          player.lastDirection = 'up'
          break;
        case 'ArrowDown':
          player.top = Math.min(player.top + step, 700 - player.height);
          player.calcBottom()
          player.lastDirection = 'down'
          break;
        case 'ArrowLeft':
          player.left = Math.max(player.left - step, 0);
          player.calcRight()
          player.lastDirection = 'left'
          break;
        case 'ArrowRight':
          player.left = Math.min(player.left + step, 1200 - player.width);
          player.calcRight()
          player.lastDirection = 'right'
          break;
      }
  
      if (checkCollision()) {
        player = new Player(previousPosition.top, previousPosition.left, previousPosition.height, previousPosition.width, previousPosition.lastDirection); // Caso ocorra uma colisão, retorna o player para a posição anterior
      }
  
      if(event.key == " ") shoot()
    }
      let interval
      onMount(() => {
      interval = setInterval(updateBullets, 16); // Atualizar a cada 16ms (~60 FPS)
  
  
      window.addEventListener('keydown', playerControls);
      window.addEventListener('keydown', playerControls);
      return () => {
        window.removeEventListener('keydown', playerControls);
  
      };
    })
    
    ;
  </script>
  
  <div class="flex flex-row">
    
    <!-- Mapa (Game) -->
    <div class="game border border-zinc-50 m-20 relative">
      <!-- Player -->
      <div
        class="player border border-indigo-900 bg-pink-500"
        style="position: absolute; top: {player.top}px; left: {player.left}px; width: {player.width}px; height: {player.height}px;">
      </div>
    
      <!-- Obstáculos -->
      {#each obstacles as obstacle}
        <div
          class="obstacle border border-pink-900 bg-blue-800"
          style="position: absolute; top: {obstacle.top}px; left: {obstacle.left}px; width: {obstacle.width}px; height: {obstacle.height}px;">
          {obstacle.left}, {obstacle.top}
        </div>
      {/each}
  
      {#each bullets as bullet}
      <div
        class="bullet bg-yellow-400"
        style="
          position: absolute;
          top: {bullet.top}px;
          left: {bullet.left}px;
          width: {bullet.width}px;
          height: {bullet.height}px;
        "
      ></div>
    {/each}
  
    </div>
  
    <!-- Painel de Dados (Data) -->
    <div class="data flex flex-col border mt-20 mx-10 border-zinc-50 h-full w-64">
      <span>player left: {player.left}</span>
      <span>player top: {player.top}</span>
      <span>player right: {player.right}</span>
      <span>player bottom: {player.bottom}</span>
    </div>
  
  </div>
  
  
  
  <style>
    .game {
      height: 700px;
      width: 1200px;
      position: relative;
    }
  
  
    .bullet {
      position: absolute;
      border-radius: 50%;
    }
  
  
  </style>
  