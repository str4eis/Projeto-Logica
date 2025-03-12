import k, { type KAPLAYCtx } from 'kaplay';

export async function loadEnemies3Sprites(k: KAPLAYCtx) {
	await k.loadSpriteAtlas('/assets/sprites/demon.png', {
		Demon: {
			x: 0,
			y: 0,
			width: 264,
			height: 41,
			sliceX: 8,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 10,
					loop: true
				},
				run: {
					from: 4,
					to: 7,
					speed: 5,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/demon-sec1.png', {
		'demon-sec1': {
			x: 0,
			y: 0,
			width: 144,
			height: 20,
			sliceX: 8,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 10,
					loop: true
				},
				run: {
					from: 4,
					to: 7,
					speed: 10,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/demon-sec2.png', {
		'demon-sec2': {
			x: 0,
			y: 0,
			width: 136,
			height: 24,
			sliceX: 8,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 10,
					loop: true
				},
				run: {
					from: 4,
					to: 7,
					speed: 10,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/demon-sec3.png', {
		'demon-sec3': {
			x: 0,
			y: 0,
			width: 120,
			height: 20,
			sliceX: 8,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 10,
					loop: true
				},
				run: {
					from: 4,
					to: 7,
					speed: 10,
					loop: true
				}
			}
		}
	});
}
