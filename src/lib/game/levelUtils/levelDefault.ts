import k, { TILE_SIZE } from '../kaplay';

type TileDefinitions = {
	[key: string]: () => any[];
};

export function createLevel(
	levelData: string[],
	world: string = 'dungeon',
	tileSize: number = TILE_SIZE
) {
	const tileDefinitions: TileDefinitions = {
		' ': () => {
            if (world === "dungeon") {
                return [k.sprite("Floor", { frame: k.randi(2) }), k.scale(4)];
            } else {
                const tileType: string = k.choose([
                    'Marked-grass',
                    'Grass',
                    'Grass',
                    'Grass',
                    'Grass',
                    'Grass',
                    'Grass'
                ]);
                if (tileType === 'Grass') {
                    return [k.sprite('Grass'), k.scale(4)];
                } else {
                    return [
                        k.sprite('Marked-grass', {
                            frame: k.randi(3),
                            flipX: k.choose([true, false]),
                            flipY: k.choose([true, false])
                        }),
                        k.scale(4)
                    ];
                }
            }
        },

		// Sprites Dungeon
		t: () => [
			k.sprite('Wall-middle', { frame: 1 }),
			k.scale(4),
			k.area(),
			k.body({ isStatic: true })
		],
		q: () => [k.sprite('Wall-top-left'), k.scale(4), k.area(), k.body({ isStatic: true })],
		p: () => [k.sprite('Wall-top-right'), k.scale(4), k.area(), k.body({ isStatic: true })],
		z: () => [k.sprite('Wall-bottom-left'), k.scale(4), k.area(), k.body({ isStatic: true })],
		m: () => [k.sprite('Wall-bottom-right'), k.scale(4), k.area(), k.body({ isStatic: true })],
		l: () => [k.sprite('Wall-side-left'), k.scale(4), k.area(), k.body({ isStatic: true })],
		r: () => [k.sprite('Wall-side-right'), k.scale(4), k.area(), k.body({ isStatic: true })],

		j: () => [
			k.sprite('Door', { frame: 0 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'porta'
		],
		k: () => [
			k.sprite('Door', { frame: 1 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'porta'
		],
		'[': () => [
			k.sprite('Door', { frame: 5 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'porta'
		],
		']': () => [
			k.sprite('Door', { frame: 9 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'porta'
		],

		'{': () => [
			k.sprite('Door', { frame: 6 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'porta'
		],
		'}': () => [
			k.sprite('Door', { frame: 10 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'porta'
		],

		b: () => [
			k.sprite('Wall-bottom-middle', { frame: 1 }),
			k.scale(4),
			k.body({ isStatic: true }),
			k.area(),
			'parede'
		],
		y: () => [
			k.sprite('Bottom-left-corner-wall'),
			k.scale(4),
			k.area(),
			k.body({ isStatic: true })
		],
		u: () => [
			k.sprite('Bottom-right-corner-wall'),
			k.scale(4),
			k.area(),
			k.body({ isStatic: true })
		],
		i: () => [k.sprite('Shadow'), k.scale(4), k.area(), k.body({ isStatic: true })],

		// Sprites Grama
		w: () => [k.sprite('Wall-top-grass'), k.scale(4), k.area(), k.body({ isStatic: true })],
		a: () => [k.sprite('Wall-bottom-grass'), k.scale(4), k.area(), k.body({ isStatic: true })],
		s: () => [k.sprite('Wall-left-grass'), k.scale(4), k.area(), k.body({ isStatic: true })],
		d: () => [k.sprite('Wall-right-grass'), k.scale(4), k.area(), k.body({ isStatic: true })],
		e: () => [k.sprite('Wall-left-corner'), k.scale(4), k.area(), k.body({ isStatic: true })],
		o: () => [k.sprite('Wall-right-corner'), k.scale(4), k.area(), k.body({ isStatic: true })],
		',': () => [
			k.sprite('Wall-left-bottom-corner'),
			k.scale(4),
			k.area(),
			k.body({ isStatic: true })
		],
		'.': () => [
			k.sprite('Wall-right-bottom-corner'),
			k.scale(4),
			k.area(),
			k.body({ isStatic: true })
		],
		f: () => [k.sprite('Top-right-border'), k.scale(4), k.area(), k.body({ isStatic: true })],
		g: () => [k.sprite('Top-left-border'), k.scale(4), k.area(), k.body({ isStatic: true })],
		h: () => [k.sprite('Bottom-right-border'), k.scale(4), k.area(), k.body({ isStatic: true })],
		n: () => [k.sprite('Bottom-left-border'), k.scale(4), k.area(), k.body({ isStatic: true })]
	};

	return k.addLevel(levelData, {
		tileWidth: tileSize,
		tileHeight: tileSize,
		tiles: tileDefinitions
	});
}
