import type { GameObj } from 'kaplay';
import {
	k,
	loadSprites,
	loadDecorationSprites,
	loadEnemies3Sprites,
	loadEffectsSprites,
	loadDungeonSprites,
	spawnPlayer,
	createLevel,
	spawnEnemy,
	spawnObject
} from '../levelUtils/imports';
import { LEVEL6 } from '../levelUtils/levelLayout';
import './levelWin';
import { spawnBoss } from '../objetos/enemy/boss';
await loadSprites(k);
await loadDecorationSprites(k);
await loadEnemies3Sprites(k);
await loadEffectsSprites(k);
await loadDungeonSprites(k);

k.scene('level6', () => {
	k.setBackground(37, 19, 26);

	createLevel(LEVEL6);

	let enemiesRemaining = 7;
	let canEnter = false;

	//decoração
	//tochas
	spawnObject(16, 0, 'torch', true, 'Torch', true);
	spawnObject(13, 0, 'torch', true, 'Torch', true);
	//bandeiras
	spawnObject(4, 0, 'flag', true, 'Flag', true);
	spawnObject(25, 0, 'flag', true, 'Flag', true);
	//candelabros
	spawnObject(2, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(27, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(3, 11, 'candlestick', true, 'Small-candlestick', true);
	spawnObject(26, 11, 'candlestick', true, 'Small-candlestick', true);
	//teias
	spawnObject(1, k.randi(3, 10), 'teia', true, 'Left-spider-web', false, false);
	spawnObject(28, k.randi(3, 10), 'teia', true, 'Right-spider-web', false, false);
	//pedras
	spawnObject(k.randi(3, 9), k.randi(2, 10), 'stone', true, 'Small-stones', false, false);
	spawnObject(k.randi(3, 9), k.randi(2, 10), 'stone', true, 'Big-stones', false, false);
	spawnObject(k.randi(12, 17), k.randi(2, 10), 'stone', true, 'Small-stones', false, false);
	spawnObject(k.randi(12, 17), k.randi(2, 10), 'stone', true, 'Big-stones', false, false);
	spawnObject(k.randi(20, 28), k.randi(2, 10), 'stone', true, 'Small-stones', false, false);
	spawnObject(k.randi(20, 28), k.randi(2, 10), 'stone', true, 'Big-stones', false, false);
	//caveiras e ossos
	spawnObject(k.randi(3, 25), k.randi(1, 10), 'caveira', true, 'Bones', false, false);
	spawnObject(k.randi(3, 25), k.randi(1, 10), 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(k.randi(3, 25), k.randi(1, 10), 'caveira', true, 'Bones', false, false);
	spawnObject(k.randi(3, 25), k.randi(1, 10), 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(k.randi(3, 25), k.randi(1, 10), 'caveira', true, 'Bones', false, false);
	spawnObject(k.randi(3, 25), k.randi(1, 10), 'caveira', true, 'Skull-and-bone', false, false);

	// const door1 = spawnObject(5, 13, 'porta', true, 'Door', false, true, 1);
	// const door2 = spawnObject(4, 13, 'porta', true, 'Door', false, true, 0);
	const door3 = spawnObject(14, 0, 'porta', true, 'Door', false, true, 0);
	const door4 = spawnObject(15, 0, 'porta', true, 'Door', false, true, 1);

	//mobs
	const enemies: GameObj[] = [
		spawnBoss(17, 4, 'Boss', false, 'Demon'),
		spawnEnemy(4, 3, 'mob', false, 'demon'),
		spawnEnemy(6, 7, 'mob', false, 'demon'),
		spawnEnemy(12, 5, 'mob', false, 'demon'),
		spawnEnemy(17, 2, 'mob', false, 'demon'),
		spawnEnemy(21, 6, 'mob', false, 'demon'),
		spawnEnemy(26, 4, 'mob', false, 'demon')
	];

	enemies.forEach((enemy) => {
		enemy.onDestroy(() => {
			enemiesRemaining--;
			// k.debug.log(`Inimigos restantes: ${enemiesRemaining}`);

			// Se todos os inimigos foram derrotados, permite a entrada
			if (enemiesRemaining <= 0) {
				canEnter = true;
				// k.debug.log('A porta está aberta!');
			}
		});
	});

	//player
	const player: GameObj = spawnPlayer(5, 12);

	player.onCollide('porta', () => {
		if (canEnter) {
			k.go('levelWin');
		} else {
			// k.debug.log('Derrote todos os inimigos primeiro!');
		}
	});
});
