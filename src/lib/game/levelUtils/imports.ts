import { loadSprites } from "../sprites"; // Importe a função de carregamento de sprites
import { spawnPlayer } from "../objetos/player/player"; // Importe a função do jogador
import { createLevel } from "./levelDefault"; // Importe a função de criação de nível
import k, { TILE_SIZE } from "../kaplay"; // Importe constantes, se necessário
import { spawnObject } from "../objetos/object";
import { spawnEnemy } from "../objetos/enemy/enemy";
export { k, TILE_SIZE, loadSprites, spawnPlayer, createLevel, spawnObject, spawnEnemy };