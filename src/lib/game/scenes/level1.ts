import type { GameObj } from 'kaplay';
import {
	k,
	TILE_SIZE,
	loadSprites,
	loadEnemies1Sprites,
	loadEffectsSprites,
	loadDungeonSprites,
	loadDecorationSprites,
	spawnPlayer,
	createLevel,
	spawnEnemy,
	spawnObject
} from '../levelUtils/imports';
import { LEVEL1 } from '../levelUtils/levelLayout';
import './level2';

await loadSprites(k);
await loadEnemies1Sprites(k);
await loadEffectsSprites(k);
await loadDungeonSprites(k);
await loadDecorationSprites(k);

k.scene('level1', () => {
	k.setBackground(37, 19, 26);

	createLevel(LEVEL1);

	// Variável para contar inimigos vivos
	let enemiesRemaining = 6; // Número total de inimigos
	let canEnter = false; // Flag para permitir a entrada na porta

	// Decoração
	spawnObject(16, 0, 'torch', true, 'Torch', true);
	spawnObject(13, 0, 'torch', true, 'Torch', true);
	spawnObject(7, 0, 'flag', true, 'Flag', true);
	spawnObject(4, 0, 'flag', true, 'Flag', true);
	spawnObject(22, 0, 'flag', true, 'Flag', true);
	spawnObject(25, 0, 'flag', true, 'Flag', true);
	spawnObject(2, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(27, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(3, 11, 'candlestick', true, 'Small-candlestick', true);
	spawnObject(26, 11, 'candlestick', true, 'Small-candlestick', true);
	spawnObject(1, 7, 'teia', true, 'Left-spider-web', false, false);
	spawnObject(28, 3, 'teia', true, 'Right-spider-web', false, false);
	spawnObject(5, 3, 'stone', true, 'Small-stones', false, false);
	spawnObject(3, 5, 'stone', true, 'Big-stones', false, false);
	spawnObject(17, 2, 'stone', true, 'Small-stones', false, false);
	spawnObject(15, 10, 'stone', true, 'Big-stones', false, false);
	spawnObject(22, 10, 'stone', true, 'Small-stones', false, false);
	spawnObject(28, 9, 'stone', true, 'Big-stones', false, false);
	spawnObject(5, 5, 'caveira', true, 'Bones', false, false);
	spawnObject(8, 8, 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(23, 7, 'caveira', true, 'Bones', false, false);
	spawnObject(16, 8, 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(23, 9, 'caveira', true, 'Bones', false, false);
	spawnObject(20, 5, 'caveira', true, 'Skull-and-bone', false, false);

	const door1 = spawnObject(29, 6, 'porta', true, 'Door', false, true, 5);
	const door2 = spawnObject(29, 7, 'porta', true, 'Door', false, true, 9);

	// Inimigos
	const enemies: GameObj[] = [
		spawnEnemy(4, 3, 'mob', false, 'ze'),
		spawnEnemy(6, 7, 'mob', false, 'ze'),
		spawnEnemy(12, 5, 'mob', false, 'ze'),
		spawnEnemy(17, 2, 'mob', false, 'ze'),
		spawnEnemy(21, 6, 'mob', false, 'ze'),
		spawnEnemy(26, 4, 'mob', false, 'ze')
	];

	// Reduz contador de inimigos quando um for derrotado
	enemies.forEach((enemy) => {
		enemy.onDestroy(() => {
			enemiesRemaining--;
			k.debug.log(`Inimigos restantes: ${enemiesRemaining}`);

			// Se todos os inimigos foram derrotados, permite a entrada
			if (enemiesRemaining <= 0) {
				canEnter = true;
				k.debug.log('A porta está aberta!');
			}
		});
	});

	// Jogador
	const player: GameObj = spawnPlayer(15, 12);

	player.onCollide('porta', () => {
		if (canEnter) {
			k.go('level2');
		} else {
			k.debug.log('Derrote todos os inimigos primeiro!');
		}
	});
});
