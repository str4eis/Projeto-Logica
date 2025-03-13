import k, { GAME } from "../kaplay";

let lastAnims = new Map(); // Agora o Map não é recriado a cada chamada

k.loadFont("forwa", "/assets/fonts/FFFFORWA.TTF", {size: 48});

export const togglePause = () => {
    const animatedObjects = k.get("animated");
    const pauseButton = k.get("pause-btn")[0]
    if (!GAME.paused) {
        
        animatedObjects.forEach(obj => {
            const curAnim = obj.getCurAnim();
            if (curAnim) {
                lastAnims.set(obj.id, curAnim.name); // Armazena pelo ID
            }
            obj.stop();
        });

        GAME.paused = true;
        pauseButton.frame = 1
        
        const menu = k.add([
            k.sprite("pause-menu"),
            k.scale(3),
            k.layer("ui"),
            k.z(100),
            k.pos(k.width() / 2, k.height() / 2),
            k.anchor("center"),
            "menuArea"
        ]);

        const resumeButton = menu.add([
            k.sprite("primary-btn-lg"),
            k.layer("ui"),
            k.z(101),
            k.area(),
            k.pos(0, -20),
            k.anchor("center"),
            "resumeButton"
        ]);

        const restartButton = menu.add([
            k.sprite("secondary-btn-lg"),
            k.layer("ui"),
            k.area(),
            k.z(101),
            k.pos(0, 10),
            k.anchor("center"),
            "restartButton"
        ]);

        const controlsButton = menu.add([
            k.sprite("secondary-btn-lg-alt"),
            k.layer("ui"),
            k.z(101),
            k.area(),

            k.pos(0, 34),
            k.anchor("center"),
            "controlsButton"
        ]);

        const exitButton = menu.add([
            k.sprite("danger-btn-lg"),
            k.layer("ui"),
            k.z(101),
            k.area(),
            k.pos(0, 58),
            k.anchor("center"),
            "exitButton"
        ]);

    } else {
        animatedObjects.forEach(obj => {
            const lastAnim = lastAnims.get(obj.id);
            if (lastAnim) {
                obj.play(lastAnim);
            }
        });

        lastAnims.clear(); // Limpa o cache de animações
        k.get("menuArea").forEach(menu => k.destroy(menu));
        GAME.paused = false;
        pauseButton.frame = 0
    }
};
