import kaplay, { type KAPLAYCtx } from 'kaplay';

export async function loadSprites(k: KAPLAYCtx) {
	await k.loadSpriteAtlas('/assets/sprites/Player.png', {
		//Sprites de personagens
		Kael: {
			x: 0,
			y: 0,
			width: 192,
			height: 320,
			sliceX: 6,
			sliceY: 10,
			anims: {
				'idle-down': {
					from: 0,
					to: 5,
					speed: 3,
					loop: true
				},
				'idle-right': {
					from: 6,
					to: 11,
					speed: 5,
					loop: true
				},
				'idle-up': {
					from: 12,
					to: 17,
					speed: 5,
					loop: true
				},
				'run-down': {
					from: 18,
					to: 23,
					speed: 13,
					loop: true
				},
				'run-right': {
					from: 24,
					to: 29,
					speed: 13,
					loop: true
				},
				'run-up': {
					from: 30,
					to: 35,
					speed: 13,
					loop: true
				},
				'attack-down': {
					from: 36,
					to: 39,
					speed: 5,
					loop: true
				},
				'attack-right': {
					from: 42,
					to: 45,
					speed: 5,
					loop: true
				},
				'attack-up': {
					from: 48,
					to: 51,
					speed: 5,
					loop: true
				},
				dead: {
					from: 54,
					to: 57,
					speed: 3,
					loop: false
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/Healthbar.png', {
		mold: {
			x: 1,
			y: 1,
			width: 78,
			height: 20
		},
		bar: {
			x: 21,
			y: 27,
			width: 56,
			height: 4
		}
	});
}
