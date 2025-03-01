import k, { TILE_SIZE } from '../kaplay'; 
import { FLOOR } from './levelLayout';

export function createDungeoLevel(scene: string) {
    k.scene(scene, () => {
        k.setBackground(37, 19, 26);

        k.addLevel(FLOOR, {
            tileHeight: TILE_SIZE,
            tileWidth: TILE_SIZE,
            tiles: {
                ' ': () => [k.sprite('Floor', { frame: k.randi(12) }), k.scale(4)]
            }
        });
      
         const healthBar = k.add([
                k.rect(100, 10),
                k.color(255, 0, 0),
                
            ]);

        }); 
    }
