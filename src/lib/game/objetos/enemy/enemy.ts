import k, { TILE_SIZE } from "$lib/game/kaplay";

export const createEnemy = (tag: string, cantMove: boolean, mobType: string) => {
    let mobSprite: string = "";
    if (mobType == "demon") {
        mobSprite = "demon-sec" + k.randi(1, 4);
    }
    if (mobType == "ogre") {
        mobSprite = "ogre-sec" + k.randi(1, 4);
    }
    if (mobType == "ze") {
        mobSprite = "ze-sec" + k.randi(1, 4);
    }

    const enemy = k.make([
        k.sprite(mobSprite, { anim: "run" }),
        k.area(),
        k.pos(),
        k.scale(4),
        k.body({ isStatic: cantMove }),
        k.anchor("center"),
        k.state("idle", ["idle", "move", "attack"]), // Adiciona estados
        k.health(3), // Adiciona vida ao inimigo
        tag,
    ]);
    return enemy;
};

export const spawnEnemy = (x: number, y: number, tag: string, cantMove: boolean = false, mobType: string) => {
    const enemy = k.add(createEnemy(tag, cantMove, mobType));
    enemy.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

    // Configuração dos estados do inimigo
    setupEnemyStates(enemy);

    return enemy;
};

// Configura os estados do inimigo
const setupEnemyStates = (enemy: any) => {
    const DETECTION_RANGE = 1000; // Range de detecção do jogador (em pixels)
    let moveUpdateHandler: any = null; // Armazena a função de atualização do estado "move"

    // Estado "idle": fica parado até o jogador entrar no range
    enemy.onStateEnter("idle", async () => {
        while (enemy.state === "idle") {
            const player = k.get("player")[0]; // Obtém o player
            if (player && player.exists()) {
                const distance = enemy.pos.dist(player.pos); // Calcula a distância entre o inimigo e o player

                // Se o jogador estiver dentro do range, muda para o estado "move"
                if (distance <= DETECTION_RANGE) {
                    enemy.enterState("move");
                    break; // Sai do loop
                }
            }

            await k.wait(0.1); // Espera um pouco antes de verificar novamente
        }
    });

    // Estado "move": persegue o jogador sem parar
    enemy.onStateEnter("move", () => {
        // Remove o handler anterior (se existir)
        if (moveUpdateHandler) {
            moveUpdateHandler.cancel();
        }

        // Adiciona um novo handler de atualização
        moveUpdateHandler = enemy.onUpdate(() => {
            const player = k.get("player")[0]; // Obtém o player
            if (!player || !player.exists()) return;

            // Move o inimigo em direção ao player
            const dir = player.pos.sub(enemy.pos).unit();
            enemy.move(dir.scale(250)); // Velocidade do inimigo

            // Aplica flipX dependendo da direção do movimento
            if (dir.x < 0) {
                enemy.flipX = true; // Inverte o sprite se estiver se movendo para a esquerda
            } else {
                enemy.flipX = false; // Mantém o sprite normal se estiver se movendo para a direita
            }

            // Verifica se o jogador saiu do range
            const distance = enemy.pos.dist(player.pos);
            if (distance > DETECTION_RANGE) {
                enemy.enterState("idle"); // Volta para o estado "idle" se o jogador sair do range
            }
        });
    });

    // Estado "attack": causa dano ao player e volta para "move"
    enemy.onStateEnter("attack", async () => {
        const player = k.get("player")[0]; // Obtém o player
        if (player && player.exists()) {
            // Causa dano ao player
            player.hurt(1);
            k.shake(10); // Efeito de tela tremendo
            k.play("hit"); // Toca um som de hit (se houver um carregado)
        }

        await k.wait(1); // Espera 1 segundo antes de voltar para "move"
        enemy.enterState("move");
    });

    // Verifica se o inimigo morreu
    enemy.onUpdate(() => {
        if (enemy.hp() <= 0) {
            k.destroy(enemy);
            k.addKaboom(enemy.pos); // Efeito de explosão ao morrer
        }
    });

    // Limpa o handler de atualização quando o estado "move" terminar
    enemy.onStateEnd("move", () => {
        if (moveUpdateHandler) {
            moveUpdateHandler.cancel(); // Remove o handler de atualização
            moveUpdateHandler = null; // Limpa a referência
        }
    });
};