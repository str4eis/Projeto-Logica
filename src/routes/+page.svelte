<script lang="ts">
    import { goto } from '$app/navigation';
    import arvoreEsquerda from '$lib/assets/arvore_esquerda.png'; 
    import arvoreDireita from '$lib/assets/arvore_direita.png';  
    import bonecoEsquerda from '$lib/assets/boneco_esquerda.png';
    import bonecoDireita from '$lib/assets/boneco_direita.png';
    import StoryModal from './StoryModal.svelte';
    
    let isStoryModalOpen = false;
  
    const toggleStoryModal = () => {
      isStoryModalOpen = !isStoryModalOpen;
    };
  
    const navigateToAbout = () => {
      goto('/sobre');

    };
</script>
  
<main>
    <div class="corner-trees">
        <img src={arvoreEsquerda} alt="Left tree" class="tree-left" />
        <img src={arvoreDireita} alt="Right tree" class="tree-right" />
    </div>
    <div class="characters">
        <img src={bonecoEsquerda} alt="Left character" class="character-left" />
        <img src={bonecoDireita} alt="Right character" class="character-right" />
    </div>
    <div class="menu">
      <h1>JOGUINHO</h1>
      
      <div class="buttons">
        <button on:click={() => goto('/jogar')}>
          JOGAR
        </button>
        
        <button on:click={toggleStoryModal}>
          HISTORIA
        </button>
        
        <button on:click={navigateToAbout}>
          SOBRE
        </button>
      </div>
    </div>
    <StoryModal 
      isOpen={isStoryModalOpen} 
      on:close={() => isStoryModalOpen = false}
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
    
    .corner-trees {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
    }

    .tree-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: auto;
    }

    .tree-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: auto;
    }

    .characters {
    position: absolute;
    bottom: 100px;
    width: 100%;
    pointer-events: none;
}

.character-left {
    position: absolute;
    left: 100px;
    bottom: 0;
    width: 120px;
    height: auto;
}

.character-right {
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
  
    .buttons {
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