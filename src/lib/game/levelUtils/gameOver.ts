import k, {GAME} from '../kaplay';

export const gameOver = () => {
    GAME.paused = true;
    const menu = k.add([
        k.sprite("game-over"),
        k.scale(3),
        k.layer("ui"),
        k.z(100),
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("center"),
        "menuArea"
    ]);
    const restartButton = menu.add([
        k.sprite("primary-btn-sm"),
        k.layer("ui"),
        k.area(),
        k.z(101),
        k.pos(-32, 10),
        k.anchor("center"),
        "restartButton"
    ]);

    const exitButton = menu.add([
        k.sprite("danger-btn-sm"),
        k.layer("ui"),
        k.z(101),
        k.area(),
        k.pos(33, 10),
        k.anchor("center"),
        "exitButton"
    ]);
}
