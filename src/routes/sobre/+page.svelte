<script lang="ts">
  import { goto } from '$app/navigation';
  import logoIfpe from '$lib/assets/logo_ifpe.jpeg'; 

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
      nome: 'Victor Daniel', 
      linkedin: 'https://www.linkedin.com/in/victor-daneil-bezerra-da-silva-a1a956323/', 
      github: 'https://github.com/victordn620' 
    },
    { 
      nome: 'Ester', 
      linkedin: 'https://www.linkedin.com/in/estervitoriareis', 
      github: 'https://github.com/str4eis' 
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
        return 'Este jogo foi desenvolvido para o projeto de Lógica de Programação da faculdade, com o objetivo de aplicar os conceitos aprendidos na disciplina, como loops, operadores lógicos e funções. O foco foi criar uma experiência interativa em que a programação lógica fosse essencial para a mecânica do jogo.';
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
  <button
    class="absolute top-4 right-4 bg-transparent border-none text-white text-2xl cursor-pointer p-2 leading-none"
    on:click={handleFechar}
  >
    ×
  </button>
  
  <div class="w-[90%] max-w-[1200px] p-8 flex flex-col items-center">
    <div class="flex justify-center items-center w-full h-[250px] mb-6 relative">
      <div class="flex justify-center items-center mt-[-200px]">
        <img src={logoIfpe} alt="Logo IFPE" class="w-[300px] h-auto object-contain">
      </div>
    </div>

    <div class="flex justify-center gap-8 flex-wrap mb-6">
      <button
        class={`px-4 py-2 rounded-md ${activeTab === 'project' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => handleTabClick('project')}
      >
        projeto
      </button>
      <button
        class={`px-4 py-2 rounded-md ${activeTab === 'idea' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => handleTabClick('idea')}
      >
        ideia
      </button>
      <button
        class={`px-4 py-2 rounded-md ${activeTab === 'devel' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => handleTabClick('devel')}
      >
        desenvolvimento
      </button>
      <button
        class={`px-4 py-2 rounded-md ${activeTab === 'team' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => handleTabClick('team')}
      >
        equipe
      </button>
    </div>

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
