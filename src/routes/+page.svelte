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
</main>
