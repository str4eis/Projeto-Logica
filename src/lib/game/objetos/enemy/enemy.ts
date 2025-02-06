import k, {TILE_SIZE} from "$lib/game/kaplay";

export const createEnemy = (tag: string, cantMove: boolean) => {
    const object = k.make([
        k.rect(64,64), 
        k.color(160, 100, 60),
        k.area(),       
        k.pos(),
        k.body({ isStatic: cantMove }), 
        k.anchor("center"), 
        
        tag
    ]);

    return object;
}

export const spawnEnemy = (x: number, y: number, tag: string, cantMove: boolean = true) => {
    const object = k.add(createEnemy(tag, cantMove));
    object.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

    return object;
};

