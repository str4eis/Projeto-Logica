import kaplay, { type KAPLAYCtx } from "kaplay";

export async function loadEnemies1Sprites(k: KAPLAYCtx) {

        //Mobs
        
    
        
        await k.loadSpriteAtlas("/assets/sprites/ze.png", {
            "Ze": {
                "x": 0,
                "y": 0,
                "width": 312,
                "height": 48,
                "sliceX": 8,
                "anims": {
                    "idle": {
                        "from": 0,
                        "to": 3,
                        "speed": 10,
                        "loop": true,
                    },
                    "run": {
                        "from": 4,
                        "to": 7,
                        "speed": 5,
                        "loop": true,
                    },
                }
            }
        })
    
        await k.loadSpriteAtlas("/assets/sprites/ze-sec1.png", {
            "ze-sec1": {
                "x": 0,
                "y": 0,
                "width": 144,
                "height": 18,
                "sliceX": 8,
                "anims": {
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
            "ze-sec2": {
                "x": 0,
                "y": 0,
                "width": 104,
                "height": 18,
                "sliceX": 8,
                "anims": {
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
            "ze-sec3": {
                "x": 0,
                "y": 0,
                "width": 60,
                "height": 19,
                "sliceX": 4,
                "anims": {
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



    }