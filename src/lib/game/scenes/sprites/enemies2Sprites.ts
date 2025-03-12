import kaplay, { type KAPLAYCtx } from 'kaplay';

export async function loadEnemies2Sprites(k: KAPLAYCtx) {
	await k.loadSpriteAtlas('/assets/sprites/ogre.png', {
		Ogre: {
			x: 0,
			y: 0,
			width: 232,
			height: 35,
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

	await k.loadSpriteAtlas('/assets/sprites/ogre-sec1.png', {
		'ogre-sec1': {
			x: 0,
			y: 0,
			width: 144,
			height: 18,
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

	await k.loadSpriteAtlas('/assets/sprites/ogre-sec2.png', {
		'ogre-sec2': {
			x: 0,
			y: 0,
			width: 128,
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

	await k.loadSpriteAtlas('/assets/sprites/ogre-sec3.png', {
		'ogre-sec3': {
			x: 0,
			y: 0,
			width: 128,
			height: 19,
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
