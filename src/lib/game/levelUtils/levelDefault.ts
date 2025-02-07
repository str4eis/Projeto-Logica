import k, { TILE_SIZE } from "../kaplay";

type TileDefinitions = {
    [key: string]: () => any[];
};
 

export function createLevel(levelData: string[], tileSize: number = TILE_SIZE) {
    const tileDefinitions: TileDefinitions = {
        //Sprites Dungeon
        "t": () => [k.sprite("Wall-middle", { frame: k.randi(4) }), k.scale(4), k.area(), k.body({ isStatic: true })],
        "q": () => [k.sprite("Wall-top-left"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "p": () => [k.sprite("Wall-top-right"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "z": () => [k.sprite("Wall-bottom-left"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "m": () => [k.sprite("Wall-bottom-right"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "l": () => [k.sprite("Wall-side-left"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "r": () => [k.sprite("Wall-side-right"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "j": () => [k.sprite("Door-left"), k.scale(4), k.body({ isStatic: true }), k.area(), "porta"],
        "k": () => [k.sprite("Door-right"), k.scale(4), k.body({ isStatic: true }), k.area(), "porta"],
        "b": () => [k.sprite("Wall-bottom-middle", { frame: k.randi(4) }), k.scale(4), k.body({ isStatic: true }), k.area(), "parede"],

        //Sprites Grama
        "w": () => [k.sprite("Wall-top-grass"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "a": () => [k.sprite("Wall-bottom-grass"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "s": () => [k.sprite("Wall-left-grass"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "d": () => [k.sprite("Wall-right-grass"), k.scale(4), k.area(), k.body({ isStatic: true })],

        "e": () => [k.sprite("Wall-left-corner"), k.scale(4), k.area(), k.body({ isStatic: true })],
        "o": () => [k.sprite("Wall-right-corner"), k.scale(4), k.area(), k.body({ isStatic: true })],
        ",": () => [k.sprite("Wall-left-bottom-corner"), k.scale(4), k.area(), k.body({ isStatic: true })],
        ".": () => [k.sprite("Wall-right-bottom-corner"), k.scale(4), k.area(), k.body({ isStatic: true })],

    };

    return k.addLevel(levelData, {
        tileWidth: tileSize,
        tileHeight: tileSize,
        tiles: tileDefinitions,
    });
}