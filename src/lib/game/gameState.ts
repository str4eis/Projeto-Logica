//variaveis globais
import { writable } from 'svelte/store';

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