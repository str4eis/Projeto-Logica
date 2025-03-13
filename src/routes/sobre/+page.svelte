<script lang="ts">
	import logoIfpe from '$lib/assets/logo-ifpe.png';

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
			nome: 'Ester Reis',
			linkedin: 'https://www.linkedin.com/in/estervitoriareis',
			github: 'https://github.com/str4eis'
		},
		{
			nome: 'João Henrique',
			linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-henriquesilvasantos/',
			github: 'https://github.com/joaoHenriqueSS'
		}
	];
	
	const obterConteudoAba = (aba: string) => {
		switch (aba) {
			case 'projeto':
				return 'This game was developed for the colleges Programming Logic project, with the aim of applying the concepts learned in the course, such as loops, logical operators and functions. The focus was to create an interactive experience in which logical programming was essential to the games mechanics.';
			case 'idea':
				return 'The idea came from inspiration in classic adventure and action games, such as Goof Troop, seeking to develop an experience focused on exploration and combat. The game is designed to challenge players through boss battles, requiring strategy to defeat enemies and advance through the Dungeon of Eternity.';
			case 'devel':
				return 'During development, mechanics were implemented that allow character movement, interactions with the environment and boss fights, using programming logic to structure the flow of the game. The project also served as an opportunity to hone skills in game development, mechanics planning, and code organization.';
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

<main class="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#24141c] font-['Press_Start_2P']">
	<button
		class="absolute right-4 top-4 cursor-pointer border-none bg-transparent p-2 text-2xl leading-none text-white"
		on:click={fechar}
	>
		×
	</button>

	<div class="flex w-[90%] max-w-[1200px] flex-col gap-y-32 items-center p-8">
		<img src={logoIfpe} alt="Logo IFPE" class="h-auto w-[300px] object-contain" />

		<!-- Div que agrupa os botões e a section -->
		<div class="w-full max-w-[900px]">
			<!-- Botões -->
			<div class="mb-6 flex flex-wrap justify-center gap-8">
				<button
					class={`rounded-md px-4 py-2 ${abaAtiva === 'projeto' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
					on:click={() => cliqueAba('projeto')}
				>
					project
				</button>
				<button
					class={`rounded-md px-4 py-2 ${abaAtiva === 'idea' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
					on:click={() => cliqueAba('idea')}
				>
					idea
				</button>
				<button
					class={`rounded-md px-4 py-2 ${abaAtiva === 'devel' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
					on:click={() => cliqueAba('devel')}
				>
					development
				</button>
				<button
					class={`rounded-md px-4 py-2 ${abaAtiva === 'team' ? 'bg-yellow-300 text-black' : 'bg-transparent text-white hover:bg-gray-700'}`}
					on:click={() => cliqueAba('team')}
				>
					team
				</button>
			</div>

			<!-- Section -->
			<section class="rounded-md border-2 border-black bg-[#DEB887] p-8 flex flex-col items-center">
				{#if abaAtiva === 'team'}
					<div class="flex flex-col gap-4 items-center">
						{#each linksEquipe as membro, index}
							<article class="flex items-center bg-white-300 gap-4 text-[0.8rem]">
								{#if conteudoExibido[index]}
									<span class="w-32 text-black">{membro.nome}</span>
									{#if conteudoExibido[index].includes('LinkedIn')}
										<a
											href={membro.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											class="text-blue-800 ml-24 transition-colors hover:text-yellow-600"
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
							</article>
						{/each}
					</div>
				{:else}
					<p class="m-0 text-justify text-[0.8rem] leading-6 text-black">
						{conteudoExibido[0]}
					</p>
				{/if}
			</section>
		</div>
	</div>
</main>
