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
import { LEVEL1, } from '../levelUtils/levelLayout';
import './level2';


await loadSprites(k);
await loadEnemies1Sprites(k);
await loadEffectsSprites(k);
await loadDungeonSprites(k);
await loadDecorationSprites(k);
k.scene('level1', () => {
	k.setBackground(37, 19, 26);

	// k.addLevel(LEVEL1_FLOOR, {
	// 	tileHeight: TILE_SIZE,
	// 	tileWidth: TILE_SIZE,
	// 	tiles: {
	// 		' ': () => [k.sprite('Floor', { frame: k.randi(4) }), k.scale(4)]
	// 	}
	// });

	createLevel(LEVEL1);
	// //decoração
	// //tochas
	spawnObject(16, 0, 'torch', true, 'Torch', true);
	spawnObject(13, 0, 'torch', true, 'Torch', true);
	// //bandeiras
	spawnObject(7, 0, 'flag', true, 'Flag', true);
	spawnObject(4, 0, 'flag', true, 'Flag', true);
	spawnObject(22, 0, 'flag', true, 'Flag', true);
	spawnObject(25, 0, 'flag', true, 'Flag', true);
	// //candelabros
	spawnObject(2, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(27, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(3, 11, 'candlestick', true, 'Small-candlestick', true);
	spawnObject(26, 11, 'candlestick', true, 'Small-candlestick', true);
	// //teias
	spawnObject(1, 7, 'teia', true, 'Left-spider-web', false, false);
	spawnObject(28, 3, 'teia', true, 'Right-spider-web', false, false);
	// //pedras
	spawnObject(5, 3, 'stone', true, 'Small-stones', false, false);
	spawnObject(3, 5, 'stone', true, 'Big-stones', false, false);
	spawnObject(17, 2, 'stone', true, 'Small-stones', false, false);
	spawnObject(15, 10, 'stone', true, 'Big-stones', false, false);
	spawnObject(22, 10, 'stone', true, 'Small-stones', false, false);
	spawnObject(28, 9, 'stone', true, 'Big-stones', false, false);
	// //caveiras e ossos
	spawnObject(5, 5, 'caveira', true, 'Bones', false, false);
	spawnObject(8, 8, 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(23, 7, 'caveira', true, 'Bones', false, false);
	spawnObject(16, 8, 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(23, 9, 'caveira', true, 'Bones', false, false);
	spawnObject(20, 5, 'caveira', true, 'Skull-and-bone', false, false);
	
	spawnObject(29,6, 'porta', true, 'Door', false, true,5 );
	spawnObject(29,7, 'porta', true, 'Door', false, true,9 );
	//mobs
	spawnEnemy(4, 3, 'mob', false, 'ze');
	spawnEnemy(6, 7, 'mob', false, 'ze');
	spawnEnemy(12, 5, 'mob', false, 'ze');
	spawnEnemy(17, 2, 'mob', false, 'ze');
	spawnEnemy(21, 6, 'mob', false, 'ze');
	spawnEnemy(26, 4, 'mob', false, 'ze');
	//player
	const player: GameObj = spawnPlayer(15, 12);

	player.onCollide('porta', () => {
		k.go('level2');
	});
});
