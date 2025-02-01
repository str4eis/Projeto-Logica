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
      <button
        class="close-button"
        on:click={closeModal}
        aria-label="Fechar modal"
      >
        ×
      </button>
      <div class="story-text">
        <h2 id="modal-title">HISTORY</h2>
        <p>
          IN A PEACEFUL VILLAGE, KAEL ARDYN, A YOUNG MAN EASTER OF ADVENTURE, FEELS AN IRRESISTIBLE CALL TO THE DEPTH OF THE FOREST. INTRIGUED BY ANCIENT LEGENDS AND RUMORS OF A DARK PLACE, HE ADVENTURES INTO THE SHADOWS OF NATURE. THE JOURNEY TAKES YOU TO AN ANCESTORAL DUNGEON, KNOWN AS THE "DUNGEON OF ETERNITY", FULL OF DANGERS AND PUZZLES THAT PROMISE TO TEST YOUR COURAGE AND DETERMINATION. AT EVERY STEP, KAEL CLOSES TO AN EPIC CONFRONTATION WITH AN UNRELEVABLE GUARDIAN WHO GUARDS THE DUNGEON'S DEEPEST SECRETS AND AN ARTIFACT OF UNMATCHED POWER: THE CRYSTAL OF ETERNITY. WHEN FINDING HIM, KAEL NOT ONLY SURVIVES, BUT ALSO TRANSFORMS, IMBUILED WITH A STRENGTH AND WISDOM THAT WILL ACCOMPANY HIM FOR ALL OF HIS LIFE.
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
    background-color: #DEB887;
    padding: 2rem;
    border: 4px solid #8B4513;
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
    color: #8B4513;
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