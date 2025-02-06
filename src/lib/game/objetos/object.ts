import k, {TILE_SIZE} from "../kaplay";

export const createObject = (tag: string, cantMove: boolean) => {
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

export const spawnObject = (x: number, y: number, tag: string, cantMove: boolean = true) => {
    const object = k.add(createObject(tag, cantMove));
    object.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

    return object;
};