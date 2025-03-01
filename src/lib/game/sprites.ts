import kaplay, { type KAPLAYCtx } from "kaplay";

export async function loadSprites(k: KAPLAYCtx) {
    await k.loadSpriteAtlas("/assets/sprites/Player.png", {
        //Sprites de personagens
        "Kael": {
            "x": 0,
            "y": 0,
            "width": 192,
            "height": 320,
            "sliceX": 6,
            "sliceY": 10,
            "anims": {
                "idle-down": {
                    "from": 0,
                    "to": 5,
                    "speed": 3,
                    "loop": true,
                },
                "idle-right": {
                    "from": 6,
                    "to": 11,
                    "speed": 5,
                    "loop": true,
                },
                "idle-up": {
                    "from": 12,
                    "to": 17,
                    "speed": 5,
                    "loop": true,
                },
                "run-down": {
                    "from": 18,
                    "to": 23,
                    "speed": 13,
                    "loop": true,
                },
                "run-right": {
                    "from": 24,
                    "to": 29,
                    "speed": 13,
                    "loop": true,
                },
                "run-up": {
                    "from": 30,
                    "to": 35,
                    "speed": 13,
                    "loop": true,
                },
                "attack-down": {
                    "from": 36,
                    "to": 39,
                    "speed": 5,
                    "loop": true,
                },
                "attack-right": {
                    "from": 42,
                    "to": 45,
                    "speed": 5,
                    "loop": true,
                },
                "attack-up": {
                    "from": 48,
                    "to": 51,
                    "speed": 5,
                    "loop": true,
                },
                "dead": {
                    "from": 54,
                    "to": 57,
                    "speed": 3,
                    "loop": true,
                },
            }
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/npc.png", {
        "Npc": {
            "x": 0,
            "y": 0,
            "width": 129,
            "height": 19,
            "sliceX": 8,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 5,
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

    await k.loadSpriteAtlas("/assets/sprites/explosion.png", {
        "Explosion": {
            "x": 0,
            "y": 0,
            "width": 175,
            "height": 32,
            "sliceX": 5,
            "anims": {
                "explode": {
                    "from": 0,
                    "to": 4,
                    "speed": 10,
                    "loop": false,
                },
            }
        }
    })

    //Mobs
    await k.loadSpriteAtlas("/assets/sprites/ogre.png", {
        "Ogre": {
            "x": 0,
            "y": 0,
            "width": 232,
            "height": 35,
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


    await k.loadSpriteAtlas("/assets/sprites/ogre-sec1.png", {
        "ogre-sec1": {
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

    await k.loadSpriteAtlas("/assets/sprites/ogre-sec2.png", {
        "ogre-sec2": {
            "x": 0,
            "y": 0,
            "width": 128,
            "height": 20,
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

    await k.loadSpriteAtlas("/assets/sprites/ogre-sec3.png", {
        "ogre-sec3": {
            "x": 0,
            "y": 0,
            "width": 128,
            "height": 19,
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

    await k.loadSpriteAtlas("/assets/sprites/demon.png", {
        "Demon": {
            "x": 0,
            "y": 0,
            "width": 264,
            "height": 41,
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

    await k.loadSpriteAtlas("/assets/sprites/demon-sec1.png", {
        "demon-sec1": {
            "x": 0,
            "y": 0,
            "width": 144,
            "height": 20,
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

    await k.loadSpriteAtlas("/assets/sprites/demon-sec2.png", {
        "demon-sec2": {
            "x": 0,
            "y": 0,
            "width": 136,
            "height": 24,
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

    await k.loadSpriteAtlas("/assets/sprites/demon-sec3.png", {
        "demon-sec3": {
            "x": 0,
            "y": 0,
            "width": 120,
            "height": 20,
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

    //Sprites do Level 0
    //Decoração
    await k.loadSpriteAtlas("assets/sprites/big-tree.png", {
        "Tree": {
            "x": 11,
            "y": 9,
            "width": 41,
            "height": 63,
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/small-trees.png", {
        "Small-tree": {
            "x": 32,
            "y": 0,
            "width": 32,
            "height": 48,
        },
        "Small-tree-cut": {
            "x": 0,
            "y": 0,
            "width": 32,
            "height": 48,
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/grass.png", {

        //Tiles
        "Grass": {
            "x": 16,
            "y": 16,
            "width": 16,
            "height": 16,
        },
        "Marked-grass": {
            "x": 0,
            "y": 80,
            "sliceX": 3,
            "width": 48,
            "height": 16,
        },
        "Wall-top-grass": {
            "x": 16,
            "y": 0,
            "width": 16,
            "height": 16,
        },
        "Wall-bottom-grass": {
            "x": 16,
            "y": 32,
            "width": 16,
            "height": 16,
        },
        "Wall-left-grass": {
            "x": 0,
            "y": 16,
            "width": 16,
            "height": 16,
        },
        "Wall-right-grass": {
            "x": 32,
            "y": 16,
            "width": 16,
            "height": 16,
        },
        "Wall-left-corner": {
            "x": 0,
            "y": 0,
            "width": 16,
            "height": 16,
        },
        "Wall-right-corner": {
            "x": 32,
            "y": 0,
            "width": 16,
            "height": 16,
        },
        "Wall-left-bottom-corner": {
            "x": 0,
            "y": 32,
            "width": 16,
            "height": 16,
        },
        "Wall-right-bottom-corner": {
            "x": 32,
            "y": 32,
            "width": 16,
            "height": 16,
        },
        "Top-right-border": {
            "x": 16,
            "y": 48,
            "width": 16,
            "height": 16,
        },
        "Top-left-border": {
            "x": 0,
            "y": 48,
            "width": 16,
            "height": 16,
        },
        "Bottom-left-border": {
            "x": 0,
            "y": 64,
            "width": 16,
            "height": 16,
        },
        "Bottom-right-border": {
            "x": 16,
            "y": 64,
            "width": 16,
            "height": 16,
        },

    })

    //Sprites da dungeon 
    
    //Decoração
    await k.loadSpriteAtlas("/assets/sprites/candlestick1.png", {
        "Small-candlestick": {
            "x": 0, 
            "y": 0,
            "sliceX": 4,
            "width": 64,    
            "height": 16,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 5,
                    "loop": true,
                },
            }
        },

    })

    await k.loadSpriteAtlas("/assets/sprites/candlestick2.png", {
        "Big-candlestick": {
            "x": 0, 
            "y": 0,
            "sliceX": 4,
            "width": 64,    
            "height": 16,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 5,
                    "loop": true,
                },
            }
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/side-torch.png", {
        "Side-torch": {
            "x": 0, 
            "y": 0,
            "sliceX": 4,
            "width": 64,    
            "height": 16,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 5,
                    "loop": true,
                },
            }
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/torch.png", {
        "Torch": {
            "x": 0, 
            "y": 0,
            "sliceX": 4,
            "width": 64,    
            "height": 16,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 5,
                    "loop": true,
                },
            }
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/flag.png", {
        "Flag": {
            "x": 0, 
            "y": 0,
            "sliceX": 4,
            "width": 64,    
            "height": 16,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 5,
                    "loop": true,
                },
            }
        },
    })

    await k.loadSpriteAtlas("/assets/sprites/world.png", {
        "Skull-and-bone": {
            "x": 112,
            "y": 112,
            "width": 16,
            "height": 16,

        }, 
        "Bones": {
            "x": 128,
            "y": 96,
            "width": 16,
            "height": 16,

        }, 
        "Right-spider-web": {
            "x": 80,
            "y": 96,
            "width": 16,
            "height": 16,

        }, 
        "Left-spider-web": {
            "x": 64,
            "y": 96,
            "width": 16,
            "height": 16,

        }, 
        "Small-stones": {
            "x": 144,
            "y": 80,
            "width": 16,
            "height": 16,

        }, 
        "Big-stones": {
            "x": 144,
            "y": 64,
            "width": 16,
            "height": 16,

        }, 
        
        //Tiles
        "Shadow": {
            "x": 128,
            "y": 112,
            "width": 16,
            "height": 16,

        },
        "Bottom-left-corner-wall": {
            "x": 0,
            "y": 80,
            "width": 16,
            "height": 16,

        },
        "Bottom-right-corner-wall": {
            "x": 48,
            "y": 80,
            "width": 16,
            "height": 16,

        },
        "Wall-top-left": {
            "x": 0,
            "y": 0,
            "width": 16,
            "height": 16,

        },
        "Wall-top-right": {
            "x": 80,
            "y": 0,
            "width": 16,
            "height": 16,

        },
        "Wall-bottom-left": {
            "x": 0,
            "y": 64,
            "width": 16,
            "height": 16,

        },
        "Wall-bottom-right": {
            "x": 80,
            "y": 64,
            "width": 16,
            "height": 16,

        },
        "Wall-middle": {
            "x": 16,
            "y": 0,
            "sliceX": 4,
            "width": 64,
            "height": 16,

        },
        "Wall-side-left": {
            "x": 0,
            "y": 16,
            "sliceY": 3,
            "width": 16,
            "height": 48,

        },
        "Wall-side-right": {
            "x": 80,
            "y": 16,
            "sliceY": 3,
            "width": 16,
            "height": 48,

        },
        "Wall-bottom-middle": {
            "x": 16,
            "y": 64,
            "sliceX": 4,
            "width": 64,
            "height": 16,

        },

        "Floor": {
            "x": 96,
            "y": 0,
            "sliceX": 4,
            "sliceY": 3,
            "width": 64,
            "height": 48,

        },

        "Door-left": {
            "x": 96,
            "y": 48,
            "sliceX": 4,
            "sliceY": 3,
            "width": 64,
            "height": 48,

        },
        "Door-right": {
            "x": 112,
            "y": 48,
            "sliceX": 4,
            "sliceY": 3,
            "width": 64,
            "height": 48,

        },
    })

    await k.loadSpriteAtlas("/assets/sprites/Healthbar.png", {
        "mold": {
            "x": 1, 
            "y": 1,
            "width": 78,    
            "height": 20,
            
        },
        "bar":{
            "x": 21, 
            "y": 27,
            "width": 56,    
            "height": 4,

          }
    })




}