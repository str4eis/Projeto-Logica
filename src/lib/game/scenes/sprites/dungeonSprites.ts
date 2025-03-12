import kaplay, { type KAPLAYCtx } from 'kaplay';

export async function loadDungeonSprites(k: KAPLAYCtx) {
	await k.loadSpriteAtlas('/assets/sprites/world.png', {
		Bones: {
			x: 128,
			y: 96,
			width: 16,
			height: 16
		},
		'Right-spider-web': {
			x: 80,
			y: 96,
			width: 16,
			height: 16
		},
		'Left-spider-web': {
			x: 64,
			y: 96,
			width: 16,
			height: 16
		},
		'Small-stones': {
			x: 144,
			y: 80,
			width: 16,
			height: 16
		},
		'Big-stones': {
			x: 144,
			y: 64,
			width: 16,
			height: 16
		},

		//Tiles
		Shadow: {
			x: 128,
			y: 112,
			width: 16,
			height: 16
		},
		'Bottom-left-corner-wall': {
			x: 0,
			y: 80,
			width: 16,
			height: 16
		},
		'Bottom-right-corner-wall': {
			x: 48,
			y: 80,
			width: 16,
			height: 16
		},
		'Wall-top-left': {
			x: 0,
			y: 0,
			width: 16,
			height: 16
		},
		'Wall-top-right': {
			x: 80,
			y: 0,
			width: 16,
			height: 16
		},
		'Wall-bottom-left': {
			x: 0,
			y: 64,
			width: 16,
			height: 16
		},
		'Wall-bottom-right': {
			x: 80,
			y: 64,
			width: 16,
			height: 16
		},
		'Wall-middle': {
			x: 16,
			y: 0,
			sliceX: 4,
			width: 64,
			height: 16
		},
		'Wall-side-left': {
			x: 0,
			y: 16,
			sliceY: 3,
			width: 16,
			height: 48
		},
		'Wall-side-right': {
			x: 80,
			y: 16,
			sliceY: 3,
			width: 16,
			height: 48
		},
		'Wall-bottom-middle': {
			x: 16,
			y: 64,
			sliceX: 4,
			width: 64,
			height: 16
		},

		Floor: {
			x: 96,
			y: 0,
			sliceX: 2,
			sliceY: 2,
			width: 64,
			height: 48
		},

		Door: {
			x: 96,
			y: 48,
			sliceX: 4,
			sliceY: 3,
			width: 64,
			height: 48
		}
	});
}
