import kaplay, { type KAPLAYCtx } from 'kaplay';

export async function loadEffectsSprites(k: KAPLAYCtx) {
	await k.loadSpriteAtlas('/assets/sprites/explosion.png', {
		Explosion: {
			x: 0,
			y: 0,
			width: 175,
			height: 32,
			sliceX: 5,
			anims: {
				explode: {
					from: 0,
					to: 4,
					speed: 10,
					loop: false
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/heart.png', {
		heart: {
			x: 0,
			y: 0,
			width: 128,
			height: 32,
			sliceX: 4,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 10,
					loop: true
				}
			}
		}
	});
}
