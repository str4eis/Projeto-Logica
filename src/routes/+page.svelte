<script lang="ts">
<<<<<<< HEAD
  import { goto } from '$app/navigation';
  import arvoreEsquerda from '$lib/assets/arvore_esquerda.png'; 
  import arvoreDireita from '$lib/assets/arvore_direita.png';  
  import bonecoEsquerda from '$lib/assets/boneco_esquerda.png';
  import bonecoDireita from '$lib/assets/boneco_direita.png';
  import StoryModal from './historia/Storymodal.svelte';
  
  let historiaModalAberto = false;
=======
	import { goto } from '$app/navigation';
	import arvoreEsquerda from '$lib/assets/arvore_esquerda.png';
	import arvoreDireita from '$lib/assets/arvore_direita.png';
	import bonecoEsquerda from '$lib/assets/boneco_esquerda.png';
	import bonecoDireita from '$lib/assets/boneco_direita.png';
	import StoryModal from './historia/Storymodal.svelte';
>>>>>>> 7d825b6d509b519d38b01f8b89be36e6b0e41e3f

	let historiaModalAberto = false;

	const alternarHistoriaModal = () => {
		historiaModalAberto = !historiaModalAberto;
	};

	const navegarParaSobre = () => {
		goto('/sobre');
	};
</script>

<<<<<<< HEAD
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
=======
<main class="relative flex h-screen w-full items-center justify-center">
	<div class="pointer-events-none absolute left-0 top-0 w-full">
		<img
			src={arvoreEsquerda}
			alt="Árvore esquerda"
			class="absolute left-0 top-0 h-auto w-[180px]"
		/>
		<img src={arvoreDireita} alt="Árvore direita" class="absolute right-0 top-0 h-auto w-[180px]" />
	</div>

	<div class="pointer-events-none absolute bottom-[100px] w-full">
		<img
			src={bonecoEsquerda}
			alt="Personagem esquerda"
			class="absolute bottom-0 left-[100px] h-auto w-[200px]"
		/>
		<img
			src={bonecoDireita}
			alt="Personagem direita"
			class="absolute bottom-0 right-[100px] h-auto w-[180px]"
		/>
	</div>

	<div class="z-10 text-center">
		<h1 class="mb-8 font-['Press_Start_2P'] text-5xl text-black drop-shadow-[2px_2px_0_#000]">
			DUNGEON OF ETERNITY
		</h1>

		<div class="flex flex-col items-center gap-4">
			<button
				on:click={() => goto('/jogar')}
				class="hover:scale-115 w-[350px] cursor-pointer border-2 border-[#8B4513] bg-[#DEB887] px-8 py-4 font-['Press_Start_2P'] text-[28px] uppercase text-black transition-all duration-300 hover:bg-[#8B4513] hover:text-white"
			>
				PLAY
			</button>

			<button
				on:click={alternarHistoriaModal}
				class="w-[300px] cursor-pointer border-2 border-[#8B4513] bg-[#DEB887] px-8 py-4 font-['Press_Start_2P'] text-lg uppercase text-black transition-all duration-300 hover:scale-105 hover:bg-[#8B4513] hover:text-white"
			>
				HISTORY
			</button>

			<button
				on:click={navegarParaSobre}
				class="w-[300px] cursor-pointer border-2 border-[#8B4513] bg-[#DEB887] px-8 py-4 font-['Press_Start_2P'] text-lg uppercase text-black transition-all duration-300 hover:scale-105 hover:bg-[#8B4513] hover:text-white"
			>
				ABOUT
			</button>
		</div>
	</div>

	<StoryModal isOpen={historiaModalAberto} on:close={() => (historiaModalAberto = false)} />
>>>>>>> 7d825b6d509b519d38b01f8b89be36e6b0e41e3f
</main>
