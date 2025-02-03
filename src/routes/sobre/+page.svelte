<script lang="ts">
    import { goto } from '$app/navigation';
    import vitinhoFoto from '$lib/assets/vitinho_foto.jpeg';
  
    const membrosEquipe = [ // foto
      { imagem: vitinhoFoto, alt: 'menbro 1' },
      { imagem: '', alt: '' },
      { imagem: '', alt: '' },
      { imagem: '', alt: '' },
      { imagem: '', alt: '' }
    ];
  
    const handleFechar = () => {
      goto('/');
    };
  </script>
  
  <main>
    <div class="container-sobre">
      <button class="botao-fechar" on:click={handleFechar}>×</button>
      
      <div class="container-avatar">
        {#each membrosEquipe as membro}
          <div class="circulo-avatar">
            <img src={membro.imagem} alt={membro.alt} />
          </div>
        {/each}
      </div>
  
      <div class="container-texto"> <!-- texto do sobre--> 
        <p>
        
        </p>
      </div>
    </div>
  </main>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
    main {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2D1B2E;
      font-family: 'Press Start 2P', cursive;
    }
  
    .container-sobre {
      width: 90%;
      max-width: 1200px;
      position: relative;
      padding: 2rem;
    }
  
    .botao-fechar {
      position: fixed; 
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;
    }
  
    .container-avatar {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1rem; 
      flex-wrap: wrap;
    }
  
    .circulo-avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid #DEB887;
      background-color: #8B4513;
    }
  
    .circulo-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .container-texto {
      background-color: #DEB887;
      padding: 2rem;
      border-radius: 8px;
      max-width: 900px;
      margin: 0 auto;
      margin-top: 3rem; 
      border: 2px solid black; 
    }
  
    .container-texto p {
      margin: 0;
      font-size: 0.8rem;
      line-height: 1.6;
      color: #000;
      text-align: justify;
    }
  
    @media (max-width: 768px) {
      .circulo-avatar {
        width: 80px;
        height: 80px;
      }
  
      .container-texto p {
        font-size: 0.7rem;
      }
  
      .container-avatar {
        gap: 1rem;
      }
    }
  </style>
  