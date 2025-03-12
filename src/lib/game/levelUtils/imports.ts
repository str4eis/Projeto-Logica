import { loadSprites } from "../sprites"; // Importe a função de carregamento de sprites
import { loadDungeonSprites } from "../dungeonSprites";
import { loadDecorationSprites } from "../decorationSprites";
import { loadEnemies1Sprites } from "../enemies1Sprites";
import { loadEnemies2Sprites } from "../enemies2Sprites";
import { loadEnemies3Sprites } from "../enemies3Sprites";

import { loadEffectsSprites } from "../effectsSprites";

import { spawnPlayer } from "../objetos/player/player"; // Importe a função do jogador
import { createLevel } from "./levelDefault"; // Importe a função de criação de nível
import k, { TILE_SIZE } from "../kaplay"; // Importe constantes, se necessário
import { spawnObject } from "../objetos/object";
import { spawnEnemy } from "../objetos/enemy/enemy";

import { togglePause } from "./pauseFunction";

export { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnObject, spawnEnemy, loadDungeonSprites, loadDecorationSprites, loadEnemies1Sprites, loadEnemies2Sprites, loadEnemies3Sprites, loadEffectsSprites, togglePause}; // Exporte tudo que for necessário