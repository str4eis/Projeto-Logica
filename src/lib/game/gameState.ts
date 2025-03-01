//variaveis globais
import { writable } from 'svelte/store';
// Variável para controlar a vida do jogador
export const playerHealth = writable(20);

// Cria um store writable com o estado inicial
export const gameState = writable({
    COIN: false
});

// Função helper para atualizar o estado
export const updateGameState = (newState: { COIN?: boolean }) => {
    gameState.update(current => ({
        ...current,
        ...newState
    }));
};

