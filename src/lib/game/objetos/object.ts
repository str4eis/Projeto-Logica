import type { GameObj } from "kaplay";
import k, { TILE_SIZE } from "../kaplay";

export const createObject = (
    tag: string,
    cantMove: boolean,
    spriteName: string,
    hasAnimation: boolean = false,
    canCollide: boolean = true
) => {
    const spriteConfig = hasAnimation ? { anim: "idle" } : {}; // Só adiciona animação se necessário

    const object = k.make([
        k.sprite(spriteName, spriteConfig), // Configura o sprite de acordo com hasAnimation
        k.scale(4),
        k.pos(),
        canCollide ? k.area() : null, // Adiciona área de colisão apenas se canCollide for true
        k.body({ isStatic: cantMove }),
        tag
    ].filter(Boolean)); // Filtra para remover null/undefined

    return object;
};

export const spawnObject = (
    x: number,
    y: number,
    tag: string,
    cantMove: boolean = true,
    spriteName: string,
    hasAnimation: boolean = false,
    canCollide: boolean = true 
) => {
    const object = k.add(createObject(tag, cantMove, spriteName, hasAnimation, canCollide));
    object.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);
    return object;
};

export const updateObjectFlipX = (object: GameObj, player: GameObj) => {
    object.flipX = player.pos.x < object.pos.x;
};