<script lang="ts">
  import { goto } from '$app/navigation';

  import arvoreEsquerda from '$lib/assets/arvore_esquerda.png'; 
  import arvoreDireita from '$lib/assets/arvore_direita.png';  
  import bonecoEsquerda from '$lib/assets/boneco_esquerda.png';
  import bonecoDireita from '$lib/assets/boneco_direita.png';
  import StoryModal from './historia/Storymodal.svelte';
  
  let historiaModalAberto = false;

  const alternarHistoriaModal = () => {
    historiaModalAberto = !historiaModalAberto;
  };

  const navegarParaSobre = () => {
    goto('/sobre');
  };
</script>

<main>
  <div class="arvores-canto">
      <img src={arvoreEsquerda} alt="Árvore esquerda" class="arvore-esquerda" />
      <img src={arvoreDireita} alt="Árvore direita" class="arvore-direita" />
  </div>
  
  <div class="personagens">
      <img src={bonecoEsquerda} alt="Personagem esquerda" class="personagem-esquerda" />
      <img src={bonecoDireita} alt="Personagem direita" class="personagem-direita" />
  </div>
  
  <div class="menu">
    <h1>DUNGEON OF ETERNITY</h1>
    
    <div class="botoes">
      <button on:click={() => goto('/jogar')}>PLAY</button>
      
      <button on:click={alternarHistoriaModal}>HISTORY</button>
      
      <button on:click={navegarParaSobre}>ABOUT</button>
    </div>

  </div>
  
    <StoryModal 
      isOpen={historiaModalAberto} 
      on:close={() => historiaModalAberto = false}
    />

</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Press Start 2P', cursive;
    background-color: #4CAF50;
    min-height: 100vh;
  }

  main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;  
  }
  
  .arvores-canto {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      pointer-events: none;
  }

  .arvore-esquerda {
      position: absolute;
      top: 0;
      left: 0;
      width: 150px;
      height: auto;
  }

  .arvore-direita {
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: auto;
  }

  .personagens {
  position: absolute;
  bottom: 100px;
  width: 100%;
  pointer-events: none;
}

.personagem-esquerda {
  position: absolute;
  left: 100px;
  bottom: 0;
  width: 120px;
  height: auto;
}

.personagem-direita {
  position: absolute;
  right: 100px;
  bottom: 0;
  width: 120px;
  height: auto;
}

  .menu {
    text-align: center;
    z-index: 1;  
  }

  h1 {
    color: black;
    margin-bottom: 2rem;
    font-size: 3em;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 2px 2px 0 #000;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: 2px solid #8B4513;
    background-color: #DEB887;
    color: black;
    cursor: pointer;
    font-family: 'Press Start 2P', cursive;
    transition: all 0.3s;
    width: 300px;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #8B4513;
    color: white;
    transform: scale(1.05);
  }
</style>