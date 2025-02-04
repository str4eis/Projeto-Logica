<script lang="ts">
  import { goto } from '$app/navigation';

  let activeTab = 'project';
  let isTyping = false;
  let textContent = '';
  let intervalId: ReturnType<typeof setInterval>;

  const handleTabClick = (tab: string) => {
    clearInterval(intervalId);
    activeTab = tab;
    startTyping(getTabContent(tab));
  };

  const handleFechar = () => {
    goto('/');
  };

  const startTyping = (text: string) => {
    isTyping = true;
    textContent = '';
    let index = 0;

    intervalId = setInterval(() => {
      if (index < text.length) {
        textContent += text[index];
        index++;
      } else {
        isTyping = false;
        clearInterval(intervalId);
      }
    }, 50);
  };

  const getTabContent = (tab: string) => {
    switch (tab) {
      case 'project':
        return 'saruba safado "projeto".';
      case 'idea':
        return 'iuewhufeuwifhewuifghewfuiewghfewiufhgewiuf "idea".';
      case 'devel':
        return 'dopwjqwqodwjqdopwqjdqwopdjqwdwqjdwqpodpo "devel".';
      case 'team':
        return '';
      default:
        return '';
    }
  };

  const equipeLinks = [
    { nome: 'Victor', linkedin: '', github: '' },
    { nome: 'Ester', linkedin: '', github: '' },
    { nome: 'Guilherme', linkedin: '', github: '' },
    { nome: 'Saruba', linkedin: '', github: '' },
    { nome: 'Henrique', linkedin: '', github: '' }
  ];
</script>

<main class="w-full min-h-screen flex flex-col justify-center items-center bg-[#2D1B2E] font-['Press_Start_2P'] relative">
  <!-- Botão de fechar no canto superior direito -->
  <button
    class="absolute top-4 right-4 bg-transparent border-none text-white text-2xl cursor-pointer p-2 leading-none"
    on:click={handleFechar}
  >
    ×
  </button>
  
  <!-- Conteiner principal da página -->
  <div class="w-[90%] max-w-[1200px] p-8 flex flex-col items-center">
    
    <!-- Conteiner da logo -->
    <div class="flex justify-center items-center w-full h-[200px] mb-6 relative">
      <!-- Moldura da logo -->
      <div class="absolute w-[300px] h-[150px] border-4 border-[#DEB887] rounded-md" style="top: -80px;"></div>
    </div>

    <!-- Conteiner das abas -->
    <div class="flex justify-center gap-8 flex-wrap mb-6">
      <!-- Botoes das abas -->
      <button
        class:bg-yellow-300={activeTab === 'project'}
        class:bg-transparent={activeTab !== 'project'}
        class="px-4 py-2 rounded-md"
        on:click={() => handleTabClick('project')}
      >
        projeto
      </button>
      <button
        class:bg-yellow-300={activeTab === 'idea'}
        class:bg-transparent={activeTab !== 'idea'}
        class="px-4 py-2 rounded-md"
        on:click={() => handleTabClick('idea')}
      >
        ideia
      </button>
      <button
        class:bg-yellow-300={activeTab === 'devel'}
        class:bg-transparent={activeTab !== 'devel'}
        class="px-4 py-2 rounded-md"
        on:click={() => handleTabClick('devel')}
      >
        desenvolvimento
      </button>
      <button
        class:bg-yellow-300={activeTab === 'team'}
        class:bg-transparent={activeTab !== 'team'}
        class="px-4 py-2 rounded-md"
        on:click={() => handleTabClick('team')}
      >
        equipe
      </button>
    </div>

    <!-- Conteúdo das abas -->
    {#if activeTab !== 'team'}
      <!-- Caixa de conteúdo -->
      <div class="bg-[#DEB887] p-8 rounded-md max-w-[900px] w-full border-2 border-black">
        <p class="m-0 text-[0.8rem] leading-6 text-black text-justify font-['Press_Start_2P']">
          {isTyping ? textContent : getTabContent(activeTab)}
        </p>
      </div>
    {:else}
      <!-- Links dos membros da equipe -->
      <div class="flex justify-center gap-8 flex-wrap">
        {#each equipeLinks as membro}
          <!-- Cada membro da equipe -->
          <div class="flex flex-col items-center">
            <p class="text-white mb-2">{membro.nome}</p>
            <div class="flex gap-2">
              <a 
                href={membro.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-white hover:text-yellow-300"
              >
                LinkedIn
              </a>
              <a 
                href={membro.github} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-white hover:text-yellow-300"
              >
                GitHub
              </a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Press_Start_2P&display=swap');
</style>