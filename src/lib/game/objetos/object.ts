import type { GameObj } from "kaplay";
import k, {TILE_SIZE} from "../kaplay";

export const createObject = (tag: string, cantMove: boolean) => {
    const object = k.make([
        k.sprite("Npc", {anim : 'idle'}),    
        k.scale(4),
        k.pos(),
        k.area(),
        k.body({ isStatic: cantMove }),
        
        tag
    ]);

    return object;
}

export const spawnObject = (x: number, y: number, tag: string, cantMove: boolean = true) => {
    const object = k.add(createObject(tag, cantMove));
    object.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

    return object;
};

export const updateObjectFlipX = (object: GameObj, player: GameObj) => {
    // Verifica a posição do player em relação ao objeto
    if (player.pos.x < object.pos.x) {
        // Player está à esquerda do objeto
        object.flipX = true; // Objeto olha para a esquerda
    } else {
        // Player está à direita do objeto
        object.flipX = false; // Objeto olha para a direita
    }
};