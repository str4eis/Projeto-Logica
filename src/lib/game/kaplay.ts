import kaplay, { type KAPLAYCtx } from "kaplay";

export async function loadSprites(k : KAPLAYCtx) {
    await k.loadSpriteAtlas("/assets/sprites/Player.png", {       
        "Kael" : {
            "x" : 0, 
            "y" : 0,
            "width" : 192,
            "height" : 320,
            "sliceX" : 6,
            "sliceY" : 10,
            "anims" : {
                "idle-down" : {
                    "from" : 0,
                    "to" : 5,
                    "speed" : 3,
                    "loop" : true,
                },
                "idle-right" : {
                    "from" : 6,
                    "to" : 11,
                    "speed" : 5,
                    "loop" : true,
                },
                "idle-up" : {
                    "from" : 12,
                    "to" : 17,
                    "speed" : 3,
                    "loop" : true,
                },
                "run-down" : {
                    "from" : 18,
                    "to" : 23,
                    "speed" : 5,
                    "loop" : true,
                },
                "run-right" : {
                    "from" : 24,
                    "to" : 29,
                    "speed" : 5,
                    "loop" : true,
                },
                "run-up" : {
                    "from" : 30,
                    "to" : 35,
                    "speed" : 5,
                    "loop" : true,
                },
                "attack-down" : {
                    "from" : 36,
                    "to" : 39,
                    "speed" : 5,
                    "loop" : true,
                },
                "attack-right" : {
                    "from" : 42,
                    "to" : 45,
                    "speed" : 5,
                    "loop" : true,
                },
                "attack-up" : {
                    "from" : 48,
                    "to" : 51,
                    "speed" : 5,
                    "loop" : true,
                },
                "dead" : {
                    "from" : 54,
                    "to" : 57,
                    "speed" : 3,
                    "loop" : true,
                },
            } 
        },
    })
    await k.loadSpriteAtlas("/assets/sprites/world.png", {
        "Wall-top-left" : {
            "x" : 0, 
            "y" : 0,
            "width" : 16,
            "height" : 16,
            
        },
        "Wall-top-right" : {
            "x" : 80, 
            "y" : 0,
            "width" : 16,
            "height" : 16,
            
        },
        "Wall-bottom-left" : {
            "x" : 0, 
            "y" : 64,
            "width" : 16,
            "height" : 16,
            
        },
        "Wall-bottom-right" : {
            "x" : 80, 
            "y" : 64,
            "width" : 16,
            "height" : 16,
            
        },
        "Wall-middle" : {
            "x" : 16, 
            "y" : 0,
            "sliceX" : 4, 
            "width" : 64,
            "height" : 16,
            
        },
        "Wall-side-left" : {
            "x" : 0, 
            "y" : 16,
            "sliceY" : 3,
            "width" : 16,
            "height" : 48,
            
        },
        "Wall-side-right" : {
            "x" : 80, 
            "y" : 16,
            "sliceY" : 3,
            "width" : 16,
            "height" : 48,

        },
        "Wall-bottom-middle" : {
            "x" : 16, 
            "y" : 64,
            "sliceX" : 4,
            "width" : 64,
            "height" : 16,

        },
        "Floor" : {
            "x" : 96, 
            "y" : 0,
            "sliceX" : 4,
            "sliceY" : 3,
            "width" : 64,
            "height" : 48,

        },
        
        "Door-left" : {
            "x" : 96, 
            "y" : 48,
            "sliceX" : 4,
            "sliceY" : 3,
            "width" : 64,
            "height" : 48,

        },
        "Door-right" : {
            "x" : 112, 
            "y" : 48,
            "sliceX" : 4,
            "sliceY" : 3,
            "width" : 64,
            "height" : 48,

        },
    })
}


const k : KAPLAYCtx = kaplay ({
    background: [37, 19, 26],
});
type TileDefinitions = {
    [key: string]: () => any[];
};
 
export function createLevel(levelData: string[], tileSize: number = TILE_SIZE) {
    const tileDefinitions: TileDefinitions = {
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
    };

    return k.addLevel(levelData, {
        tileWidth: tileSize,
        tileHeight: tileSize,
        tiles: tileDefinitions,
    });
}
export const SPEED = 350;
export const TILE_SIZE = 64;

export default k;
