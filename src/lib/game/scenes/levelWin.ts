import type { GameObj } from 'kaplay';
import {
	k,
	TILE_SIZE,
	loadSprites,
	spawnPlayer,
	createLevel,
	spawnObject
} from '../levelUtils/imports';
import { LEVEL_WIN } from '../levelUtils/levelLayout';
import { FLOOR } from '../levelUtils/levelLayout';
await loadSprites(k);

k.scene('levelWin', () => {
	k.setBackground(37, 19, 26);

	k.addLevel(FLOOR, {
		tileHeight: TILE_SIZE,
		tileWidth: TILE_SIZE,
		tiles: {
			' ': () => [k.sprite('Floor', { frame: k.randi(12) }), k.scale(4)]
		}
	});

	createLevel(LEVEL_WIN);
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
	spawnObject(15, 7, 'npc', true, 'Npc', true);
	const player: GameObj = spawnPlayer(15, 12);

	player.onCollide('porta', () => {
		window.location.href = '/';
	});
});
