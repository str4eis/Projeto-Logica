<script lang="ts">
	import logoIfpe from '$lib/assets/logo-ifpe.png';

	let abaAtiva = 'project';
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
			linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-henriquesilvasantos/',
			github: 'https://github.com/joaoHenriqueSS'
		}
	];

	const obterConteudoAba = (aba: string) => {
		switch (aba) {
			case 'project':
				return 'This game was developed for the college Programming Logic project, with the goal of applying the concepts learned in the course, such as loops, logical operators, and functions. The focus was on creating an interactive experience where programming logic was essential to the games mechanics.';
			case 'idea':
				return 'The idea was inspired by classic adventure and action games, such as Goof Troop, aiming to develop an experience focused on exploration and combat. The game was designed to challenge players through boss battles, requiring strategy to defeat enemies and progress in Dungeon of Eternity.';
			case 'devel':
				return 'During development, mechanics were implemented to allow character movement, interactions with the environment, and boss fights, using programming logic to structure the games flow. The project also served as an opportunity to enhance skills in game development, mechanics planning, and code organization.';
			case 'team':
				return linksEquipe.map((membro) => `${membro.nome} - LinkedIn GitHub`);
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

		const conteudo =
			abaAtiva === 'team'
				? (obterConteudoAba(abaAtiva) as string[])
				: [obterConteudoAba(abaAtiva) as string];

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
					conteudoExibido[linhaAtual] =
						(conteudoExibido[linhaAtual] || '') + conteudo[linhaAtual][caracterAtual];
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

<main
	class="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#2D1B2E] font-['Press_Start_2P']"
>
	<button
		class="absolute right-4 top-4 cursor-pointer border-none bg-transparent p-2 text-2xl leading-none text-white"
		on:click={fechar}
	>
		×
	</button>

	<div class="flex w-[90%] max-w-[1200px] flex-col items-center p-8">
		<div class="relative mb-6 flex h-[250px] w-full items-center justify-center">
			<div class="mt-[-200px] flex items-center justify-center">
				<img src={logoIfpe} alt="Logo IFPE" class="h-auto w-[300px] object-contain" />
			</div>
		</div>

		<div class="mb-6 flex flex-wrap justify-center gap-8">
			<button
				class={`rounded-md px-4 py-2 ${abaAtiva === 'project' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
				on:click={() => cliqueAba('project')}
			>
				Project
			</button>
			<button
				class={`rounded-md px-4 py-2 ${abaAtiva === 'idea' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
				on:click={() => cliqueAba('idea')}
			>
				Idea
			</button>
			<button
				class={`rounded-md px-4 py-2 ${abaAtiva === 'devel' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
				on:click={() => cliqueAba('devel')}
			>
				Development
			</button>
			<button
				class={`rounded-md px-4 py-2 ${abaAtiva === 'team' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
				on:click={() => cliqueAba('team')}
			>
				Team
			</button>
		</div>

		<div class="w-full max-w-[900px] rounded-md border-2 border-black bg-[#DEB887] p-8">
			{#if abaAtiva === 'team'}
				<div class="flex flex-col gap-4">
					{#each linksEquipe as membro, index}
						<div class="flex items-center gap-4 text-[0.8rem]">
							{#if conteudoExibido[index]}
								<span class="w-32 text-black">{membro.nome}</span>
								{#if conteudoExibido[index].includes('LinkedIn')}
									<a
										href={membro.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										class="text-blue-800 transition-colors hover:text-yellow-600"
									>
										LinkedIn
									</a>
								{/if}
								{#if conteudoExibido[index].includes('GitHub')}
									<a
										href={membro.github}
										target="_blank"
										rel="noopener noreferrer"
										class="text-blue-800 transition-colors hover:text-yellow-600"
									>
										GitHub
									</a>
								{/if}
							{/if}
						</div>
					{/each}
				</div>
			{:else}
				<p class="m-0 text-justify text-[0.8rem] leading-6 text-black">
					{conteudoExibido[0]}
				</p>
			{/if}
		</div>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Press_Start_2P&display=swap');
</style>
