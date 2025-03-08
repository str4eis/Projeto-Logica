import kaplay, { type KAPLAYCtx } from 'kaplay';

const k: KAPLAYCtx = kaplay({
	background: [62, 137, 72],
	maxFPS: 60
});

export const SPEED = 350;
export const TILE_SIZE = 64;

export default k;
