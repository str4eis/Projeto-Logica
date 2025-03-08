import k, { TILE_SIZE } from '$lib/game/kaplay';

export const createBoss = (tag: string, cantMove: boolean, mobType: string) => {
	let mobSprite: string = '';
	if (mobType == 'Demon') {
		mobSprite = 'Demon';
	}
	if (mobType == 'Ogre') {
		mobSprite = 'Ogre';
	}
	if (mobType == 'Ze') {
		mobSprite = 'Ze';
	}

	const boss = k.make([
		k.sprite(mobSprite, { anim: 'run' }),
		k.area({
			shape: new k.Rect(k.vec2(0, 0), 16, 28)
		}),
		k.z(4),
		k.pos(),
		k.scale(4),
		k.body({ isStatic: cantMove }),
		k.anchor('center'),
		k.state('idle', ['idle', 'move', 'attack']), // Adiciona estados
		k.health(15), // Adiciona vida ao inimigo
		{
			isTakingDmg: false
		},
		tag,
		'enemy'
	]);

	// Cria a barra de vida do boss na parte superior direita da tela
	const healthBarBg = k.add([
		k.rect(600, 20), // Triplica o tamanho da barra
		k.color(255, 0, 0),
		k.z(10),
		k.pos(k.width() / 2 - 300, 10), // Ajusta a posição para a nova largura
		'healthBarBg'
	]);

	const healthBar = k.add([
		k.rect(600, 20), // Triplica o tamanho da barra
		k.color(0, 255, 0),
		k.z(11),
		k.pos(k.width() / 2 - 300, 10), // Ajusta a posição para a nova largura
		'healthBar'
	]);

	boss.onHurt(() => {
		const healthPercentage = boss.hp() / 20;
		healthBar.width = 600 * healthPercentage; // Ajusta a largura da barra
	});

	boss.onDestroy(() => {
		k.destroy(healthBar);
		k.destroy(healthBarBg);
	});

	return boss;
};

export const spawnBoss = (
	x: number,
	y: number,
	tag: string,
	cantMove: boolean = false,
	mobType: string
) => {
	const boss = k.add(createBoss(tag, cantMove, mobType));
	boss.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

	// Configuração dos estados do inimigo
	setupBossStates(boss);

	return boss;
};

// Configura os estados do inimigo
const setupBossStates = (boss: any) => {
	const DETECTION_RANGE = 1000; // Range de detecção do jogador (em pixels)
	let moveUpdateHandler: any = null; // Armazena a função de atualização do estado "move"

	// Estado "idle": fica parado até o jogador entrar no range
	boss.onStateEnter('idle', async () => {
		while (boss.state === 'idle') {
			const player = k.get('player')[0]; // Obtém o player
			if (player && player.exists()) {
				const distance = boss.pos.dist(player.pos); // Calcula a distância entre o inimigo e o player

				// Se o jogador estiver dentro do range, muda para o estado "move"
				if (distance <= DETECTION_RANGE) {
					boss.enterState('move');
					break; // Sai do loop
				}
			}

			await k.wait(0.1); // Espera um pouco antes de verificar novamente
		}
	});

	// Estado "move": persegue o jogador sem parar
	boss.onStateEnter('move', () => {
		// Remove o handler anterior (se existir)
		if (moveUpdateHandler) {
			moveUpdateHandler.cancel();
		}

		// Adiciona um novo handler de atualização
		moveUpdateHandler = boss.onUpdate(() => {
			const player = k.get('player')[0]; // Obtém o player
			if (!player || !player.exists()) return;

			// Move o inimigo em direção ao player
			const dir = player.pos.sub(boss.pos).unit();
			boss.move(dir.scale(125)); // Velocidade do inimigo

			// Aplica flipX dependendo da direção do movimento
			if (dir.x < 0) {
				boss.flipX = true; // Inverte o sprite se estiver se movendo para a esquerda
			} else {
				boss.flipX = false; // Mantém o sprite normal se estiver se movendo para a direita
			}

			// Verifica se o jogador saiu do range
			const distance = boss.pos.dist(player.pos);
			if (distance > DETECTION_RANGE) {
				boss.enterState('idle'); // Volta para o estado "idle" se o jogador sair do range
			}
			if (boss.pos.dist(player.pos) <= 75) {
				boss.enterState('attack');
			}
		});
	});

	// Estado "attack": causa dano ao player e volta para "move"
	boss.onStateEnter('attack', async () => {
		const player = k.get('player')[0]; // Obtém o player
		if (player && player.exists()) {
			// Causa dano ao player
			player.hurt(3);
			k.shake(20); // Efeito de tela tremendo
		}

		await k.wait(1); // Espera 1 segundo antes de voltar para "move"
		boss.enterState('move');
	});

	// Verifica se o inimigo morreu
	boss.onUpdate(() => {
		if (boss.hp() <= 0) {
			k.destroy(boss);
			k.add([
				k.color(190, 0, 0),
				k.sprite('Explosion', { anim: 'explode' }),
				k.pos(boss.pos),
				k.scale(4),
				k.anchor('center'),
				k.lifespan(0.4), // Duração da explosão
				k.opacity(1)
			]);
		}
	});

	// Limpa o handler de atualização quando o estado "move" terminar
	boss.onStateEnd('move', () => {
		if (moveUpdateHandler) {
			moveUpdateHandler.cancel(); // Remove o handler de atualização
			moveUpdateHandler = null; // Limpa a referência
		}
	});

	boss.onHurt(() => {
		if (boss.isTakingDmg) return; // se o boss já estiver tomando dano, não faz nada

		boss.isTakingDmg = true;
		boss.color = k.rgb(120, 20, 0); // Define a cor para vermelho

		const player = k.get('player')[0]; // pega o player

		if (player && player.exists()) {
			const dir = boss.pos.sub(player.pos).unit(); // a direção do knockback

			const targetPos = boss.pos.add(dir.scale(25)); // a posição final do knockback

			k.tween(boss.pos, targetPos, 0.15, (p) => {
				boss.pos = p;
			}); // Animação de knockback
		}
		k.wait(0.5, () => {
			// espera 0.5 segundos
			boss.color = undefined; // reseta a cor
			boss.isTakingDmg = false; // reseta a flag de dano
		});
	});
};
