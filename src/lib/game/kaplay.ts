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
                    "speed" : 5,
                    "loop" : true,
                },
                "run-down" : {
                    "from" : 18,
                    "to" : 23,
                    "speed" : 13,
                    "loop" : true,
                },
                "run-right" : {
                    "from" : 24,
                    "to" : 29,
                    "speed" : 13,
                    "loop" : true,
                },
                "run-up" : {
                    "from" : 30,
                    "to" : 35,
                    "speed" : 13,
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

    await k.loadSpriteAtlas("/assets/sprites/npc.png", {
        "Npc" : {
            "x" : 0,
            "y" : 0,
            "width" : 129,
            "height" : 19,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 7,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ogre.png", {
        "Ogre" : {
            "x" : 0,
            "y" : 0,
            "width" : 232,
            "height" : 35,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    
    await k.loadSpriteAtlas("/assets/sprites/ogre-sec1.png", {
        "ogre-sec1" : {
            "x" : 0,
            "y" : 0,
            "width" : 144,
            "height" : 18,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ogre-sec2.png", {
        "ogre-sec2" : {
            "x" : 0,
            "y" : 0,
            "width" : 128,
            "height" : 20,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ogre-sec3.png", {
        "ogre-sec3" : {
            "x" : 0,
            "y" : 0,
            "width" : 128,
            "height" : 40,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/demon.png", {
        "Demon" : {
            "x" : 0,
            "y" : 0,
            "width" : 264,
            "height" : 41,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/demon-sec1.png", {
        "demon-sec1" : {
            "x" : 0,
            "y" : 0,
            "width" : 144,
            "height" : 20,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/demon-sec2.png", {
        "demon-sec2" : {
            "x" : 0,
            "y" : 0,
            "width" : 136,
            "height" : 24,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/demon-sec3.png", {
        "demon-sec3" : {
            "x" : 0,
            "y" : 0,
            "width" : 120,
            "height" : 20,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ze.png", {
        "Ze" : {
            "x" : 0,
            "y" : 0,
            "width" : 312,
            "height" : 48,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ze-sec1.png", {
        "ze-sec1" : {
            "x" : 0,
            "y" : 0,
            "width" : 144,
            "height" : 18,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ze-sec2.png", {
        "ze-sec2" : {
            "x" : 0,
            "y" : 0,
            "width" : 104,
            "height" : 18,
            "sliceX" : 8,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 4,
                    "to": 7,
                    "speed": 10,
                    "loop": true,
                },
            }
        }
    })

    await k.loadSpriteAtlas("/assets/sprites/ze-sec3.png", {
        "ze-sec3" : {
            "x" : 0,
            "y" : 0,
            "width" : 60,
            "height" : 19,
            "sliceX" : 4,
            "anims" : {
                "idle": {
                "from": 0,
                "to": 3,
                "speed": 10,
                "loop": true,
                },
                "run": {
                    "from": 2,
                    "to": 3,
                    "speed": 10,
                    "loop": true,
                }
            }
        }
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

export const title = "hello word"
export const SPEED = 350;
export const TILE_SIZE = 64;

export default k;
