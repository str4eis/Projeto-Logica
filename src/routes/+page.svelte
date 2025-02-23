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

<main class="w-full h-screen flex justify-center items-center relative">
  <div class="absolute top-0 left-0 w-full pointer-events-none">
    <img src={arvoreEsquerda} alt="Árvore esquerda" class="absolute top-0 left-0 w-[180px] h-auto" />
    <img src={arvoreDireita} alt="Árvore direita" class="absolute top-0 right-0 w-[180px] h-auto" />
  </div>
  
  <div class="absolute bottom-[100px] w-full pointer-events-none">
    <img src={bonecoEsquerda} alt="Personagem esquerda" class="absolute left-[100px] bottom-0 w-[200px] h-auto" />
    <img src={bonecoDireita} alt="Personagem direita" class="absolute right-[100px] bottom-0 w-[180px] h-auto" />
  </div>
  
  <div class="text-center z-10">
    <h1 class="text-black mb-8 text-5xl font-['Press_Start_2P'] drop-shadow-[2px_2px_0_#000]">
      DUNGEON OF ETERNITY
    </h1>
    
    <div class="flex flex-col gap-4 items-center">
      <button 
        on:click={() => goto('/jogar')}
        class="px-8 py-4 text-[28px] border-2 border-[#8B4513] bg-[#DEB887] text-black cursor-pointer font-['Press_Start_2P'] transition-all duration-300 w-[350px] uppercase hover:bg-[#8B4513] hover:text-white hover:scale-115"
      >
        PLAY
      </button>
      
      <button 
        on:click={alternarHistoriaModal}
        class="px-8 py-4 text-lg border-2 border-[#8B4513] bg-[#DEB887] text-black cursor-pointer font-['Press_Start_2P'] transition-all duration-300 w-[300px] uppercase hover:bg-[#8B4513] hover:text-white hover:scale-105"
      >
        HISTORY
      </button>
      
      <button 
        on:click={navegarParaSobre}
        class="px-8 py-4 text-lg border-2 border-[#8B4513] bg-[#DEB887] text-black cursor-pointer font-['Press_Start_2P'] transition-all duration-300 w-[300px] uppercase hover:bg-[#8B4513] hover:text-white hover:scale-105"
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
