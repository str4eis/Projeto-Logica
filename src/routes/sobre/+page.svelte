<script lang="ts">
  import { goto } from '$app/navigation';

  let activeTab = 'project';
  let isTyping = false;
  let displayedContent: string[] = [];
  let intervalId: ReturnType<typeof setInterval>;

  const handleTabClick = (tab: string) => {
    clearInterval(intervalId);
    activeTab = tab;
    startTyping();
  };

  const handleFechar = () => {
    goto('/');
  };

  const equipeLinks = [
    { 
      nome: 'Victor', 
      linkedin: 'https://linkedin.com/in/victor', 
      github: 'https://github.com/victor' 
    },
    { 
      nome: 'Ester', 
      linkedin: 'https://linkedin.com/in/ester', 
      github: 'https://github.com/ester' 
    },
    { 
      nome: 'Guilherme', 
      linkedin: 'https://linkedin.com/in/guilherme', 
      github: 'https://github.com/guilherme' 
    },
    { 
      nome: 'Saruba', 
      linkedin: 'https://linkedin.com/in/saruba', 
      github: 'https://github.com/saruba' 
    },
    { 
      nome: 'Henrique', 
      linkedin: 'https://linkedin.com/in/henrique', 
      github: 'https://github.com/henrique' 
    }
  ];

  const getTabContent = (tab: string) => {
    switch (tab) {
      case 'project':
        return 'saruba safado "projeto".';
      case 'idea':
        return 'iuewhufeuwifhewuifghewfuiewghfewiuf "idea".';
      case 'devel':
        return 'dopwjqwqodwjqdopwqjdqwopdjqwdwqjdwqpodpo "devel".';
      case 'team':
        return equipeLinks.map(membro => 
          `${membro.nome} - LinkedIn GitHub`
        );
      default:
        return '';
    }
  };

  const startTyping = () => {
    isTyping = true;
    displayedContent = activeTab === 'team' ? [] : [''];
    let currentText = '';
    let currentLine = 0;
    let currentChar = 0;

    const content = activeTab === 'team' ? 
      getTabContent(activeTab) as string[] : 
      [getTabContent(activeTab) as string];

    intervalId = setInterval(() => {
      if (currentLine >= content.length) {
        isTyping = false;
        clearInterval(intervalId);
        return;
      }

      if (currentChar < content[currentLine].length) {
        if (activeTab === 'team') {
          if (currentChar === 0) {
            displayedContent[currentLine] = '';
          }
          displayedContent[currentLine] = (displayedContent[currentLine] || '') + content[currentLine][currentChar];
        } else {
          currentText += content[currentLine][currentChar];
          displayedContent[0] = currentText;
        }
        currentChar++;
      } else {
        currentLine++;
        currentChar = 0;
        if (activeTab === 'team' && currentLine < content.length) {
          displayedContent = [...displayedContent, ''];
        }
      }
    }, 50);
  };
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
      <!-- Moldura ifpe -->
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
    <div class="bg-[#DEB887] p-8 rounded-md max-w-[900px] w-full border-2 border-black">
      {#if activeTab === 'team'}
        <div class="flex flex-col gap-4">
          {#each equipeLinks as membro, index}
            <div class="flex items-center gap-4 text-[0.8rem]">
              {#if displayedContent[index]}
                <span class="text-black w-32">{membro.nome}</span>
                {#if displayedContent[index].includes('LinkedIn')}
                  <a 
                    href={membro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-800 hover:text-yellow-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                {/if}
                {#if displayedContent[index].includes('GitHub')}
                  <a 
                    href={membro.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-800 hover:text-yellow-600 transition-colors"
                  >
                    GitHub
                  </a>
                {/if}
              {/if}
            </div>
          {/each}
        </div>
      {:else}
        <p class="m-0 text-[0.8rem] leading-6 text-black text-justify">
          {displayedContent[0]}
        </p>
      {/if}
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Press_Start_2P&display=swap');
</style>