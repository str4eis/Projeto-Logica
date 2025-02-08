import type { GameObj } from "kaplay";
import k, { TILE_SIZE } from "../kaplay";

export const createObject = (tag: string, cantMove: boolean, spriteName: string, hasAnimation: boolean = false) => {
    const spriteConfig = hasAnimation ? { anim: "idle" } : {}; // Só adiciona animação se necessário

    const object = k.make([
        k.sprite(spriteName, spriteConfig), // Configura o sprite de acordo com hasAnimation
        k.scale(4),
        k.pos(),
        k.area(),
        k.body({ isStatic: cantMove }),
        tag
    ]);

    return object;
};

export const spawnObject = (x: number, y: number, tag: string, cantMove: boolean = true, spriteName: string, hasAnimation: boolean = false) => {
    const object = k.add(createObject(tag, cantMove, spriteName, hasAnimation));
    object.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);
    return object;
};

export const updateObjectFlipX = (object: GameObj, player: GameObj) => {
    object.flipX = player.pos.x < object.pos.x;
};
