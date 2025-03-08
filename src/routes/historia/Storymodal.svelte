<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let isOpen = false;

	// Variáveis e funções reutilizadas do código do sobre
	let estaDigitando = false;
	let conteudoExibido: string[] = [];
	let idIntervalo: ReturnType<typeof setInterval>;

	const limparIntervalo = () => {
		if (idIntervalo) {
			clearInterval(idIntervalo);
		}
	};

	const iniciarDigitacao = () => {
		estaDigitando = true;
		conteudoExibido = [''];
		let textoAtual = '';
		let linhaAtual = 0;
		let caracterAtual = 0;

		const textoCompleto = [
			`KAEL ARDYN, A YOUNG ADVENTURER DRIVEN BY THE DESIRE TO EXPLORE THE UNKNOWN. DURING ONE OF HIS EXPEDITIONS THROUGH A DENSE 
		FOREST, HE CROSSED PATHS WITH A HOODED STRANGER. BEFORE HE COULD REACT, A DARK ENERGY ENGULFED HIM, DRAGGING HIM INTO A DEEP 
		VOID. UPON AWAKENING, KAEL FOUND HIMSELF IMPRISONED IN A COLOSSAL DUNGEON, WHERE THE BITING COLD AND THE STENCH OF DEATH HUNG 
		HEAVY IN THE AIR. THE STONE WALLS WHISPERED FORGOTTEN SECRETS, AND IN THE SHADOWS, HUNGRY EYES WATCHED HIS EVERY MOVE. THIS 
		WAS NO ORDINARY DUNGEON—IT WAS A LABYRINTH OF ENDLESS HORRORS. NOW, TO SURVIVE, KAEL MUST FACE HORDES OF BLOODTHIRSTY UNDEAD, 
		WAR-HUNGRY ORCS, AND DEMONS THAT FEED ON DESPAIR. EACH BATTLE BRINGS HIM CLOSER TO THE TRUTH: WHO IS THE MYSTERIOUS MASKED 
		FIGURE THAT IMPRISONED HIM? WHAT IS THE PURPOSE OF THIS DUNGEON THAT SEEMS TO HAVE NO END? IN THE DARK CORRIDORS OF THIS 
		ETERNAL PRISON, KAEL FIGHTS NOT ONLY FOR HIS FREEDOM—BUT TO AVOID BECOMING ONE OF THE CONDEMNED.`
		];

		idIntervalo = setInterval(() => {
			if (linhaAtual >= textoCompleto.length) {
				estaDigitando = false;
				limparIntervalo();
				return;
			}

			if (caracterAtual < textoCompleto[linhaAtual].length) {
				textoAtual += textoCompleto[linhaAtual][caracterAtual];
				conteudoExibido[0] = textoAtual;
				caracterAtual++;
			} else {
				linhaAtual++;
				caracterAtual = 0;
			}
		}, 50);
	};

	const closeModal = () => {
		dispatch('close');
		limparIntervalo(); // Limpa o intervalo ao fechar o modal
		conteudoExibido = []; // Reseta o conteúdo exibido
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeModal();
		}
	};

	// Inicia a digitação sempre que o modal for aberto
	onMount(() => {
		if (isOpen) {
			iniciarDigitacao();
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			limparIntervalo(); // Limpa o intervalo ao fechar o modal
		};
	});

	// Observa mudanças em `isOpen` para iniciar/parar a digitação
	$: if (isOpen) {
		iniciarDigitacao();
	} else {
		limparIntervalo();
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
	>
		<div class="relative mx-4 max-w-3xl rounded-lg border border-4 border-black bg-[#DEB887] p-8">
			<button
				class="absolute right-2 top-2 text-2xl font-bold hover:text-gray-700"
				on:click={closeModal}
				aria-label="Fechar modal"
			>
				×
			</button>

			<div class="font-['Press_Start_2P'] text-black">
				<h2 id="modal-title" class="mb-6 text-center text-xl">HISTORY</h2>
				<p class="text-justify text-sm leading-6">
					{#if conteudoExibido[0]}
						{conteudoExibido[0]}
					{:else}
						&nbsp; <!-- Espaço reservado para evitar colapso de layout -->
					{/if}
				</p>
			</div>
		</div>
	</div>
{/if}
