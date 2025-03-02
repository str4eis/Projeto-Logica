import kaplay, { type KAPLAYCtx } from "kaplay";

export async function loadWorldSprites(k: KAPLAYCtx) {


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

    });

    
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

    
}