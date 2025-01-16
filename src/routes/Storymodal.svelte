<script lang="ts">
    import { createEventDispatcher  } from 'svelte';
    const dispatch = createEventDispatcher();
  
    export let isOpen = false;
  
    const closeModal = () => {
      dispatch('close');
    };
  </script>
  
  {#if isOpen}
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="close-button" on:click={closeModal}>×</button>
        <div class="story-text">
          EM UM VILAREJO PACATO, KAEL ARDYN, UM JOVEM ÁVIDO POR AVENTURAS, SENTE UM CHAMADO IRRESISTÍVEL PELAS PROFUNDEZAS DA FLORESTA. INTRIGADO POR ANTIGAS LENDAS E RUMORES DE UM LUGAR OBSCURO, ELE SE AVENTURA NAS SOMBRAS DA NATUREZA. A JORNADA O LEVA A UMA MASMORRA ANCESTRAL, CONHECIDA COMO A "MASMORRA DA ETERNIDADE", REPLETA DE PERIGOS E ENIGMAS QUE PROMETEM TESTAR SUA CORAGEM E DETERMINAÇÃO. A CADA PASSO, KAEL SE APROXIMA DE UM CONFRONTO ÉPICO COM UM GUARDIÃO IMPLACÁVEL, QUE GUARDA OS SEGREDOS MAIS PROFUNDOS DA MASMORRA E UM ARTEFATO DE PODER INCOMPARÁVEL: O CRISTAL DA ETERNIDADE. AO ENCONTRÁ-LO, KAEL NÃO APENAS SOBREVIVE, MAS TAMBÉM SE TRANSFORMA, IMBUÍDO DE UMA FORÇA E SABEDORIA QUE O ACOMPANHARÃO POR TODA A VIDA.
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
    }
  
    .modal-content {
      background-color: #DEB887;
      padding: 2rem;
      border: 4px solid #8B4513;
      max-width: 800px;
      width: 90%;
      position: relative;
      font-family: 'Press Start 2P', cursive;
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
  </style>