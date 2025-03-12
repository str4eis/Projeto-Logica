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

<style>
  main {
    background-color: #25131a;
    background-image: url('/assets/imgs/background.png');
    background-size: 65%; /* Ensure the image is not stretched */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    image-rendering: pixelated;
  }

  .button {
    position: relative;
    display: inline-block;
    width: 300px; /* Mesma largura para todos os botões */
    padding: 16px 32px;
    font-size: 28px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #f8ffe5;
    border: 2px solid black; /* Bordas pretas */
    background-color: #6e4b49;
  }

  .button::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 8px;
    background-color: black; /* Bordas pretas */
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #4e3534;
  }

  .button:active {
    transform: translateY(6px);
    color: #191520; /* Cor do texto ao clicar */
  }

  .button:active::before {
    transform: translateY(-6px);
  }

  .button-primary {
    background-color: #3083dc;
    height: 100px; /* Altura maior para o botão "PLAY" */
  }

  .button-primary:hover {
    background-color: #1c5ca8;
  }

  .button-primary:active {
    background-color: #1c5ca8;
    color: #191520; /* Cor do texto ao clicar */
  }
</style>

<main class="w-full h-screen flex justify-center items-center relative">
  <div class="text-center z-10">
    <div class="flex flex-col gap-4 items-center">
      <button 
        on:click={() => goto('/jogar')}
        class="button button-primary"
      >
        PLAY
      </button>
      
      <button 
        on:click={alternarHistoriaModal}
        class="button"
      >
        HISTORY
      </button>
      
      <button 
        on:click={navegarParaSobre}
        class="button"
      >
        ABOUT
      </button>
    </div>
  </div>
  
  <StoryModal 
    isOpen={historiaModalAberto} 
    on:close={() => historiaModalAberto = false}
  />
</main>
