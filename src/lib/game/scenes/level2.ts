import type { GameObj } from 'kaplay';
import {
	k,
	TILE_SIZE,
	loadSprites,
	spawnPlayer,
	createLevel,
	spawnEnemy,
	spawnObject
} from '../levelUtils/imports';
import { LEVEL2 } from '../levelUtils/levelLayout';
import { FLOOR } from '../levelUtils/levelLayout';
import { spawnBoss } from '../objetos/enemy/boss';
import './level3';
await loadSprites(k);

k.scene('level2', () => {
	k.setBackground(37, 19, 26);

	k.addLevel(FLOOR, {
		tileHeight: TILE_SIZE,
		tileWidth: TILE_SIZE,
		tiles: {
			' ': () => [k.sprite('Floor', { frame: k.randi(12) }), k.scale(4)]
		}
	});

	createLevel(LEVEL2);
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
	//mobs
	spawnBoss(17, 4, 'Boss', false, 'Ze');
	spawnEnemy(k.randi(2, 9), k.randi(2, 7), 'mob', false, 'ze');
	spawnEnemy(k.randi(2, 9), k.randi(2, 7), 'mob', false, 'ze');
	spawnEnemy(k.randi(12, 17), k.randi(2, 7), 'mob', false, 'ze');
	spawnEnemy(k.randi(12, 17), k.randi(2, 7), 'mob', false, 'ze');
	spawnEnemy(k.randi(20, 28), k.randi(2, 7), 'mob', false, 'ze');
	spawnEnemy(k.randi(20, 28), k.randi(2, 7), 'mob', false, 'ze');
	//player
	const player: GameObj = spawnPlayer(15, 12);

	player.onCollide('porta', () => {
		k.go('level3');
	});
});
