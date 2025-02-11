import k, { TILE_SIZE } from "$lib/game/kaplay";

export const createBoss = (tag: string, cantMove: boolean, mobType: string) => {
    let mobSprite: string = "";
    if (mobType == "Demon") {
        mobSprite = "Demon" 
    }
    if (mobType == "Ogre") {
        mobSprite = "Ogre"  
    }
    if (mobType == "Ze") {
        mobSprite = "Ze" 
    }

    const  boss = k.make([
        k.sprite(mobSprite, { anim: "run" }),
        k.area({
            shape: new k.Rect(k.vec2(0, 0), 16, 28),
        }),
        k.pos(),
        k.scale(4),
        k.body({ isStatic: cantMove }),
        k.anchor("center"),
        k.state("idle", ["idle", "move", "attack"]), // Adiciona estados
        k.health(15), // Adiciona vida ao inimigo
        tag,
    ]);
    return  boss;
};

export const spawnBoss = (x: number, y: number, tag: string, cantMove: boolean = false, mobType: string) => {
    const  boss = k.add(createBoss(tag, cantMove, mobType));
     boss.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

    // Configuração dos estados do inimigo
    setupBossStates( boss);

    return  boss;
};

// Configura os estados do inimigo
const setupBossStates = ( boss: any) => {
    const DETECTION_RANGE = 1000; // Range de detecção do jogador (em pixels)
    let moveUpdateHandler: any = null; // Armazena a função de atualização do estado "move"

    // Estado "idle": fica parado até o jogador entrar no range
     boss.onStateEnter("idle", async () => {
        while ( boss.state === "idle") {
            const player = k.get("player")[0]; // Obtém o player
            if (player && player.exists()) {
                const distance =  boss.pos.dist(player.pos); // Calcula a distância entre o inimigo e o player

                // Se o jogador estiver dentro do range, muda para o estado "move"
                if (distance <= DETECTION_RANGE) {
                     boss.enterState("move");
                    break; // Sai do loop
                }
            }

            await k.wait(0.1); // Espera um pouco antes de verificar novamente
        }
    });

    // Estado "move": persegue o jogador sem parar
     boss.onStateEnter("move", () => {
        // Remove o handler anterior (se existir)
        if (moveUpdateHandler) {
            moveUpdateHandler.cancel();
        }

        // Adiciona um novo handler de atualização
        moveUpdateHandler =  boss.onUpdate(() => {
            const player = k.get("player")[0]; // Obtém o player
            if (!player || !player.exists()) return;

            // Move o inimigo em direção ao player
            const dir = player.pos.sub( boss.pos).unit();
             boss.move(dir.scale(125)); // Velocidade do inimigo

            // Aplica flipX dependendo da direção do movimento
            if (dir.x < 0) {
                 boss.flipX = true; // Inverte o sprite se estiver se movendo para a esquerda
            } else {
                 boss.flipX = false; // Mantém o sprite normal se estiver se movendo para a direita
            }

            // Verifica se o jogador saiu do range
            const distance =  boss.pos.dist(player.pos);
            if (distance > DETECTION_RANGE) {
                 boss.enterState("idle"); // Volta para o estado "idle" se o jogador sair do range
            }
        });
    });

    // Estado "attack": causa dano ao player e volta para "move"
     boss.onStateEnter("attack", async () => {
        const player = k.get("player")[0]; // Obtém o player
        if (player && player.exists()) {
            // Causa dano ao player
            player.hurt(1);
            k.shake(10); // Efeito de tela tremendo
            k.play("hit"); // Toca um som de hit (se houver um carregado)
        }

        await k.wait(1); // Espera 1 segundo antes de voltar para "move"
         boss.enterState("move");
    });

    // Verifica se o inimigo morreu
     boss.onUpdate(() => {
        if ( boss.hp() <= 0) {
            k.destroy( boss);
            k.addKaboom( boss.pos); // Efeito de explosão ao morrer
        }
    });

    // Limpa o handler de atualização quando o estado "move" terminar
     boss.onStateEnd("move", () => {
        if (moveUpdateHandler) {
            moveUpdateHandler.cancel(); // Remove o handler de atualização
            moveUpdateHandler = null; // Limpa a referência
        }
    });
};