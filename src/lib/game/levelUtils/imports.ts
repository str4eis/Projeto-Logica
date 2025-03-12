import { loadSprites } from '../scenes/sprites/sprites'; // Importe a função de carregamento de sprites
import { loadDungeonSprites } from '../scenes/sprites/dungeonSprites';
import { loadDecorationSprites } from '../scenes/sprites/decorationSprites';
import { loadEnemies1Sprites } from '../scenes/sprites/enemies1Sprites';
import { loadEnemies2Sprites } from '../scenes/sprites/enemies2Sprites';
import { loadEnemies3Sprites } from '../scenes/sprites/enemies3Sprites';

import { loadEffectsSprites } from '../scenes/sprites/effectsSprites';

import { spawnPlayer } from "../objetos/player/player"; // Importe a função do jogador
import { createLevel } from "./levelDefault"; // Importe a função de criação de nível
import k, { TILE_SIZE } from "../kaplay"; // Importe constantes, se necessário
import { spawnObject } from "../objetos/object";
import { spawnEnemy } from "../objetos/enemy/enemy";

import { togglePause } from "./pauseFunction";

export { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnObject, spawnEnemy, loadDungeonSprites, loadDecorationSprites, loadEnemies1Sprites, loadEnemies2Sprites, loadEnemies3Sprites, loadEffectsSprites, togglePause}; // Exporte tudo que for necessário