import kaplay, { type KAPLAYCtx } from 'kaplay';
//Decoração
export async function loadDecorationSprites(k: KAPLAYCtx) {
	await k.loadSpriteAtlas('/assets/sprites/candlestick1.png', {
		'Small-candlestick': {
			x: 0,
			y: 0,
			sliceX: 4,
			width: 64,
			height: 16,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 8,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/candlestick2.png', {
		'Big-candlestick': {
			x: 0,
			y: 0,
			sliceX: 4,
			width: 64,
			height: 16,
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

	await k.loadSpriteAtlas('/assets/sprites/side-torch.png', {
		'Side-torch': {
			x: 0,
			y: 0,
			sliceX: 4,
			width: 64,
			height: 16,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 28,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/torch.png', {
		Torch: {
			x: 0,
			y: 0,
			sliceX: 4,
			width: 64,
			height: 16,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 15,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/flag.png', {
		Flag: {
			x: 0,
			y: 0,
			sliceX: 4,
			width: 64,
			height: 16,
			anims: {
				idle: {
					from: 0,
					to: 3,
					speed: 15,
					loop: true
				}
			}
		}
	});

	await k.loadSpriteAtlas('/assets/sprites/world.png', {
		'Skull-and-bone': {
			x: 112,
			y: 112,
			width: 16,
			height: 16
		}
	});
}
