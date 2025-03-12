import kaplay, { type KAPLAYCtx } from "kaplay";

export async function loadEffectsSprites(k: KAPLAYCtx) {

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
    
    await k.loadSpriteAtlas("/assets/sprites/heart.png", {
        "heart": {
            "x": 0,
            "y": 0,
            "width": 128,
            "height": 32,
            "sliceX": 4,
            "anims": {
                "idle": {
                    "from": 0,
                    "to": 3,
                    "speed": 10,
                    "loop": true,
                },
            }
            
        }
    })

    // buttons
    await k.loadSpriteAtlas("/assets/sprites/ui.png", {
        "pause-btn": {
            "x": 448,
            "y": 32,
            "width": 86,
            "height": 44,
            "sliceX": 2,
        },

        "mini-close-btn": {
            "x": 545,
            "y": 33,
            "width": 14,
            "height": 14,
        },

        "primary-btn-lg": {
            "x": 16,
            "y": 16,
            "width": 232,
            "height": 30,
            "sliceX": 2,
            
        },
        "secondary-btn-lg": {
            "x": 16,
            "y": 48,
            "width": 232,
            "height": 23,
            "sliceX": 2,
        },
        "secondary-btn-lg-alt": {
            "x": 176,
            "y": 192,
            "width": 232,
            "height": 23,
            "sliceX": 2,
        },
        "danger-btn-lg": {
            "x": 16,
            "y": 80,
            "width": 232,
            "height": 23,
            "sliceX": 2
        },
        "primary-btn-sm": {
            "x": 256,
            "y": 16,
            "width": 126,
            "height": 24,
            "sliceX": 2,
            
        },
        "secondary-btn-sm": {
            "x": 256,
            "y": 48,
            "width": 126,
            "height": 24,
            "sliceX": 2,
            
        },
        "danger-btn-sm": {
            "x": 256,
            "y": 80,
            "width": 126,
            "height": 24,
            "sliceX": 2,
            
        },
    })

    // screens
    await k.loadSpriteAtlas("/assets/sprites/ui.png", {
        "pause-menu": {
            "x": 16,
            "y": 112,
            "width": 148,
            "height": 167
        },
        "game-over": {
            "x": 176,
            "y": 112,
            "width": 148,
            "height": 62,
        },
        "controls": {
            "x": 176,
            "y": 224,
            "width": 230,
            "height": 158,
        },

    })
}


