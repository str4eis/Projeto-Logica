<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let isOpen = false;

	// Fecha o modal e dispara o evento 'close'
	const closeModal = () => {
		dispatch('close');
	};

	// Fecha o modal ao pressionar a tecla "Esc"
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeModal();
		}
	};

	// Adiciona e remove o listener de teclado quando o modal é aberto/fechado
	onMount(() => {
		if (isOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

{#if isOpen}
	<div
		class="modal-overlay"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
	>
		<div class="modal-content">
			<button class="close-button" on:click={closeModal} aria-label="Fechar modal"> × </button>
			<div class="story-text">
				<h2 id="modal-title">HISTORY</h2><br>
				<p>
					KAEL ARDYN, A YOUNG ADVENTURER DRIVEN BY THE DESIRE TO EXPLORE THE UNKNOWN. DURING ONE OF
					HIS EXPEDITIONS THROUGH A DENSE FOREST, HE CROSSED PATHS WITH A HOODED STRANGER. BEFORE HE
					COULD REACT, A DARK ENERGY ENGULFED HIM, DRAGGING HIM INTO A DEEP VOID. UPON AWAKENING,
					KAEL FOUND HIMSELF IMPRISONED IN A COLOSSAL DUNGEON, WHERE THE BITING COLD AND THE STENCH
					OF DEATH HUNG HEAVY IN THE AIR. THE STONE WALLS WHISPERED FORGOTTEN SECRETS, AND IN THE
					SHADOWS, HUNGRY EYES WATCHED HIS EVERY MOVE. THIS WAS NO ORDINARY DUNGEON—IT WAS A
					LABYRINTH OF ENDLESS HORRORS. NOW, TO SURVIVE, KAEL MUST FACE HORDES OF BLOODTHIRSTY
					UNDEAD, WAR-HUNGRY ORCS, AND DEMONS THAT FEED ON DESPAIR. EACH BATTLE BRINGS HIM CLOSER TO
					THE TRUTH: WHO IS THE MYSTERIOUS MASKED FIGURE THAT IMPRISONED HIM? WHAT IS THE PURPOSE OF
					THIS DUNGEON THAT SEEMS TO HAVE NO END? IN THE DARK CORRIDORS OF THIS ETERNAL PRISON, KAEL
					FIGHTS NOT ONLY FOR HIS FREEDOM—BUT TO AVOID BECOMING ONE OF THE CONDEMNED.
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		animation: fadeIn 0.3s ease-in-out;
	}

	.modal-content {
		background-color: #deb887;
		padding: 2rem;
		border: 4px solid #8b4513;
		max-width: 800px;
		width: 90%;
		position: relative;
		font-family: 'Press Start 2P', cursive;
		animation: slideIn 0.3s ease-in-out;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		color: #8b4513;
		padding: 5px 10px;
	}

	.close-button:hover {
		color: #000;
	}

	.story-text {
		font-size: 14px;
		line-height: 1.6;
		color: #000;
		text-align: justify;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideIn {
		from {
			transform: translateY(-20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
