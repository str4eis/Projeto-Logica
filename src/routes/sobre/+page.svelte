<script lang="ts">
  import { goto } from '$app/navigation';
  import logoIfpe from '$lib/assets/logo_ifpe.png'; 

  let abaAtiva = 'projeto';
  let estaDigitando = false;
  let conteudoExibido: string[] = [];
  let idIntervalo: ReturnType<typeof setInterval>;

  const cliqueAba = (aba: string) => {
    limparIntervalo();
    abaAtiva = aba;
    iniciarDigitacao();
  };

  const fechar = () => {
    window.location.href = '/';
  };

  const linksEquipe = [
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
      linkedin: 'https://www.linkedin.com/in/guilherme-felipe-7184ab30a', 
      github: 'https://github.com/BalaZxx' 
    },
    { 
      nome: 'Saruba', 
      linkedin: 'https://www.linkedin.com/in/gabriel-saruba-2778522a6', 
      github: 'https://github.com/gabrielsaruba' 
    },
    { 
      nome: 'Henrique', 
      linkedin: 'https://linkedin.com/in/henrique', 
      github: 'https://github.com/henrique' 
    }
  ];

  const obterConteudoAba = (aba: string) => {
    switch (aba) {
      case 'projeto':
        return 'Este jogo foi desenvolvido para o projeto de Lógica de Programação da faculdade, com o objetivo de aplicar os conceitos aprendidos na disciplina, como loops, operadores lógicos e funções. O foco foi criar uma experiência interativa em que a programação lógica fosse essencial para a mecânica do jogo.';
      case 'idea':
        return 'iuewhufeuwifhewuifghewfuiewghfewiuf "idea".';
      case 'devel':
        return 'dopwjqwqodwjqdopwqjdqwopdjqwdwqjdwqpodpo "devel".';
      case 'team':
        return linksEquipe.map(membro => 
          `${membro.nome} - LinkedIn GitHub`
        );
      default:
        return '';
    }
  };

  const limparIntervalo = () => {
    if (idIntervalo) {
      clearInterval(idIntervalo);
    }
  };

  const iniciarDigitacao = () => {
    estaDigitando = true;
    conteudoExibido = abaAtiva === 'team' ? [] : [''];
    let textoAtual = '';
    let linhaAtual = 0;
    let caracterAtual = 0;

    const conteudo = abaAtiva === 'team' ? 
      obterConteudoAba(abaAtiva) as string[] : 
      [obterConteudoAba(abaAtiva) as string];

    idIntervalo = setInterval(() => {
      if (linhaAtual >= conteudo.length) {
        estaDigitando = false;
        limparIntervalo();
        return;
      }

      if (caracterAtual < conteudo[linhaAtual].length) {
        if (abaAtiva === 'team') {
          if (caracterAtual === 0) {
            conteudoExibido[linhaAtual] = '';
          }
          conteudoExibido[linhaAtual] = (conteudoExibido[linhaAtual] || '') + conteudo[linhaAtual][caracterAtual];
        } else {
          textoAtual += conteudo[linhaAtual][caracterAtual];
          conteudoExibido[0] = textoAtual;
        }
        caracterAtual++;
      } else {
        linhaAtual++;
        caracterAtual = 0;
        if (abaAtiva === 'team' && linhaAtual < conteudo.length) {
          conteudoExibido = [...conteudoExibido, ''];
        }
      }
    }, 50);
  };

  // Iniciar digitação quando o componente for montado
  let mounted = false;
  if (!mounted) {
    mounted = true;
    iniciarDigitacao();
  }
</script>

<main class="w-full min-h-screen flex flex-col justify-center items-center bg-[#2D1B2E] font-['Press_Start_2P'] relative">
  <button
    class="absolute top-4 right-4 bg-transparent border-none text-white text-2xl cursor-pointer p-2 leading-none"
    on:click={fechar}
  >
    ×
  </button>
  
  <div class="w-[90%] max-w-[1200px] p-8 flex flex-col items-center">
    <div class="flex justify-center items-center w-full h-[250px] mb-6 relative">
      <div class="flex justify-center items-center mt-[-100px]">
        <img src={logoIfpe} alt="Logo IFPE" class="w-[150px] h-auto object-contain">
      </div>
    </div>

    <div class="flex justify-center gap-8 flex-wrap mb-6">
      <button
        class={`px-4 py-2 rounded-md ${abaAtiva === 'projeto' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => cliqueAba('projeto')}
      >
        projeto
      </button>
      <button
        class={`px-4 py-2 rounded-md ${abaAtiva === 'idea' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => cliqueAba('idea')}
      >
        ideia
      </button>
      <button
        class={`px-4 py-2 rounded-md ${abaAtiva === 'devel' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => cliqueAba('devel')}
      >
        desenvolvimento
      </button>
      <button
        class={`px-4 py-2 rounded-md ${abaAtiva === 'team' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
        on:click={() => cliqueAba('team')}
      >
        equipe
      </button>
    </div>

    <div class="bg-[#DEB887] p-8 rounded-md max-w-[900px] w-full border-2 border-black">
      {#if abaAtiva === 'team'}
        <div class="flex flex-col gap-4">
          {#each linksEquipe as membro, index}
            <div class="flex items-center gap-4 text-[0.8rem]">
              {#if conteudoExibido[index]}
                <span class="text-black w-32">{membro.nome}</span>
                {#if conteudoExibido[index].includes('LinkedIn')}
                  <a 
                    href={membro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-800 hover:text-yellow-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                {/if}
                {#if conteudoExibido[index].includes('GitHub')}
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
          {conteudoExibido[0]}
        </p>
      {/if}
    </div>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Press_Start_2P&display=swap');
</style>